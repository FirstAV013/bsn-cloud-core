Library "setupCommon.brs"
Library "setupNetworkDiagnostics.brs"

Sub Main()
  
  ' Script to read the relevant information from a sync spec and write it to the registry
  ' this setup script is used specifically for the case where the user wants to first display pre positioned content then download new content from bsn
  version = "8.0.0.1"

  debugParams = EnableDebugging("localToBSN-sync.json")

  sysFlags = {}
  sysFlags.debugOn = debugParams.serialDebugOn
  sysFlags.systemLogDebugOn = debugParams.systemLogDebugOn

  diagnostics = newDiagnostics(sysFlags)

  diagnostics.printDebug("standaloneToBsnSetup.brs version " + version + " started")
  
  modelSupportsWifi = GetModelSupportsWifi()
  
  CheckFirmwareVersion()
  
  CheckStorageDeviceIsWritable()
  
  registrySection = CreateObject("roRegistrySection", "networking")
  if type(registrySection) <> "roRegistrySection" then
    print "Error: Unable to create roRegistrySection"
    stop
  end if
  
  msgPort = CreateObject("roMessagePort")
  ' create setup splash screen
  ' only set splash screen if device supports video
  videoMode = CreateObject("roVideoMode")
  if type(videoMode) = "roVideoMode" then
    deviceSetupSplashScreen = SetDeviceSplashScreenMessageByType(invalid, "bsn", msgPort)
  end if
  
  ' retrieve and parse featureMinRevs.xml
  featureMinRevs = ParseFeatureMinRevs()
  
  ' Load up the current sync specification
  current_sync = CreateObject("roSyncSpec")
  if not current_sync.ReadFromFile("localToBSN-sync.json") then
    stop
  end if
  setupParams = ParseAutoplay(current_sync)
  WriteRegistryVersion(registrySection, setupParams.version)

  ClearRegistryKeys(registrySection, setupParams.inheritNetworkProperties)

  if setupParams.inheritNetworkProperties then
    registrySection.Write("inp", "yes")
  end if

  registrationRequired = RegistrationReset(registrySection)

  ' BSN.cloud
  SetBsnCloudParameters(setupParams, registrySection)

  if registrationRequired then
    TriggerRegistrationRequest(registrySection, msgPort)
  end if

  ' indicate setup type
  ' it will be a BSN device
  registrySection.Write("sut", "BSN")
  
  ' indicate version number
  registrySection.Write("v", "1")
  
  ' write identifying data to registry
  ' TODO - enableUnsafeAuthentication?'
  registrySection.Write("u", setupParams.user)
  registrySection.Write("p", setupParams.password)
  registrySection.Write("tz", setupParams.timezone$)
  registrySection.Write("un", setupParams.unitName$)
  registrySection.Write("unm", setupParams.unitNamingMethod$)
  registrySection.Write("ud", setupParams.unitDescription$)
  registrySection.Write("tbnc", GetNumericStringFromNumber(setupParams.timeBetweenNetConnects%))
  
  registrySection.Write("cdr", GetYesNoFromBoolean(setupParams.contentDownloadsRestricted))
  registrySection.Write("cdrs", GetNumericStringFromNumber(setupParams.contentDownloadRangeStart%))
  registrySection.Write("cdrl", GetNumericStringFromNumber(setupParams.contentDownloadRangeLength%))
  
  registrySection.Write("tbh", GetNumericStringFromNumber(setupParams.timeBetweenHeartbeats%))
  
  heartbeatsRestricted = GetYesNoFromBoolean(setupParams.heartbeatsRestricted)
  registrySection.Write("hr", heartbeatsRestricted)
  if heartbeatsRestricted = "yes" then
    registrySection.Write("hrs", GetNumericStringFromNumber(setupParams.heartbeatsRangeStart%))
    registrySection.Write("hrl", GetNumericStringFromNumber(setupParams.heartbeatsRangeLength%))
  end if

  ' Wireless parameters
  useWireless = SetWirelessParameters(setupParams, registrySection, modelSupportsWifi)
  
  ' Wired parameters
  SetWiredParameters(setupParams, registrySection, useWireless)

  ' Network configurations
  if setupParams.useWireless then
    if modelSupportsWifi then
      wifiNetworkingParameters = SetNetworkConfiguration(1, setupParams, registrySection, "", "")
      ethernetNetworkingParameters = SetNetworkConfiguration(0, setupParams, registrySection, "_2", "2")
    else
      ' if the user specified wireless but the system doesn't support it, use the parameters specified for wired (the secondary parameters)
      ethernetNetworkingParameters = SetNetworkConfiguration(0, setupParams, registrySection, "_2", "")
    end if
  else
    ethernetNetworkingParameters = SetNetworkConfiguration(0, setupParams, registrySection, "", "")
  end if
  
  ' BCN-6317
  if setupParams.inheritNetworkProperties then
    registrySection.Write("inp", "yes")
    WriteTimeServer(setupParams, registrySection)
    GetProxy(setupParams, registrySection)
  else
    ' network host parameters
    proxySpec$ = GetProxy(setupParams, registrySection)
    bypassProxyHosts = GetBypassProxyHosts(proxySpec$, setupParams)
    
    'Timer server
    WriteTimeServer(setupParams, registrySection)
    
    ' Hostname
    SetHostname(setupParams.specifyHostname, setupParams.hostName$)
    
    ' write networkHosts string to registry
    if proxySpec$ <> "" then
      networkHosts$ = FormatJson(setupParams.networkHosts)
      registrySection.Write("bph", networkHosts$)
    else
      registrySection.Write("bph", "")
    end if

    ' Network connection priorities
    networkConnectionPriorityWired% = setupParams.networkConnectionPriorityWired%
    networkConnectionPriorityWireless% = setupParams.networkConnectionPriorityWireless%
    
    ' configure ethernet
    ConfigureEthernet(ethernetNetworkingParameters, networkConnectionPriorityWired%, setupParams.timeServer$, proxySpec$, bypassProxyHosts, featureMinRevs)
    
    ' configure wifi if specified and device supports wifi
    if useWireless
      ConfigureWifi(wifiNetworkingParameters, setupParams.ssid$, setupParams.passphrase$, networkConnectionPriorityWireless%, setupParams.timeServer$, proxySpec$, bypassProxyHosts, featureMinRevs)
    end if
    
    ' if a device is setup to not use wireless, ensure that wireless is not used (for wireless model only)
    if not useWireless and modelSupportsWifi then
      DisableWireless()
    end if
  end if
  
  ' diagnostic web server
  SetDWS(setupParams, registrySection)
  
  ' local web server
  SetLWS(setupParams, registrySection)
  
  ' logging
  SetLogging(setupParams, registrySection)
  
  ' remote snapshot
  SetRemoteSnapshot(setupParams, registrySection)
  
  ' idle screen color
  SetIdleColor(setupParams, registrySection)
  
  ' custom splash screen
  SetCustomSplashScreen(setupParams, registrySection, featureMinRevs)
  
  ' beacons
  SetBeacons(setupParams, registrySection, featureMinRevs)
  
  ' BrightWall
  registrySection.Write("brightWallName", setupParams.brightWallName)
  registrySection.Write("brightWallScreenNumber", setupParams.brightWallScreenNumber)
  
  ' handlers
  SetRecoveryHandlerUrl(setupParams, registrySection)
  registrySection.Write("ub", setupParams.base)
  registrySection.Write("rs", setupParams.recoverySetup)
  registrySection.Write("nu", setupParams.next)
  registrySection.Write("vu", setupParams.event)
  registrySection.Write("eu", setupParams.error)
  registrySection.Write("de", setupParams.deviceError)
  registrySection.Write("dd", setupParams.deviceDownload)
  registrySection.Write("dp", setupParams.deviceDownloadProgress)
  registrySection.Write("td", setupParams.trafficDownload)
  registrySection.Write("ul", setupParams.uploadLogs)
  registrySection.Write("bs", setupParams.batteryCharger)
  registrySection.Write("hh", setupParams.heartbeat)
  
  registrySection.Flush()
  
  wiredDataTransferEnabled = setupParams.contentDataTypeEnabledWired
  wirelessDataTransferEnabled = setupParams.contentDataTypeEnabledWireless
  binding% = GetBinding(wiredDataTransferEnabled, wirelessDataTransferEnabled)
  
  ' perform network diagnostics if enabled
  if setupParams.networkDiagnosticsEnabled then
    PerformNetworkDiagnostics(setupParams.testEthernetEnabled, setupParams.testWirelessEnabled, setupParams.testInternetEnabled)
  end if
  
  ' overwrite setup script with standard autorun. restart to play local content
  MoveFile("pending-autorun.brs", "autorun.brs")
  
  registrySection.Delete("registration_in_progress")
  registrySection.Flush()
  ' restart
  RestartIfNecessary(setupParams, true)
  
end sub


Function ParseAutoplay(setup_sync as object) as object
  
  setupParams = { }
  
  ParseAutoplayCommon(setupParams, setup_sync)
  
  return setupParams
  
end function
