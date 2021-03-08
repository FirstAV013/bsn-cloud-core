Library "setupCommon.brs"
Library "setupNetworkDiagnostics.brs"

Sub Main()
  
  ' Local setup script
  version = "8.0.0.1"
  
  debugParams = EnableDebugging("setup.json")

  sysFlags = {}
  sysFlags.debugOn = debugParams.serialDebugOn
  sysFlags.systemLogDebugOn = debugParams.systemLogDebugOn

  diagnostics = newDiagnostics(sysFlags)

  diagnostics.printDebug("localSetup.brs version " + version + " started")

  modelSupportsWifi = GetModelSupportsWifi()
  
  CheckFirmwareVersion()
  
  ' Load up the sync specification
  localToStandaloneSyncSpec = false
  setup_sync = CreateObject("roSyncSpec")
  
  if setup_sync.ReadFromFile("setup.json") then
    setupParams = ParseAutoplay(setup_sync)
  else
    ' BACONTODO
    stop
    diagnostics.printDebug("### No local sync state available")
    if not setup_sync.ReadFromFile("localSetupToStandalone-sync.xml") then
      stop
    end if
    localToStandaloneSyncSpec = true
  end if
  
  if setupParams.lwsConfig$ = "content" then
    CheckStorageDeviceIsWritable()
  end if
  
  registrySection = CreateObject("roRegistrySection", "networking")
  if type(registrySection) <> "roRegistrySection" then
    diagnostics.printDebug("Error: Unable to create roRegistrySection")
    stop
  end if
  
  supervisorRegistrySection = CreateObject("roRegistrySection", "!supervisor.brightsignnetwork.com")
  if type(supervisorRegistrySection) <> "roRegistrySection" then
    diagnostics.printDebug("Error: Unable to create supervisorRegistrySection roRegistrySection"): stop
  end if
  oldBsnce = supervisorRegistrySection.Read("bsnce")
  ClearBsnce(supervisorRegistrySection, setupParams.bsnCloudEnabled)
  ClearRegistryKeys(registrySection, setupParams.inheritNetworkProperties)

  if setupParams.inheritNetworkProperties then
    registrySection.Write("inp", "yes")
  end if

  registrationRequired = RegistrationReset(registrySection)
  
  WriteRegistryVersion(registrySection, setupParams.version)

  ' BSN.cloud
  SetBsnCloudParameters(setupParams, registrySection)

  msgPort = CreateObject("roMessagePort")

  if registrationRequired then
    TriggerRegistrationRequest(registrySection, msgPort)
  end if

  ' create setup splash screen
  ' If no setup type in sync spec, use the classic logic to determine setup type
  if setupParams.setupType = "" then
    if setupParams.lwsConfig$ = "content" then
      setupType = "lfn"
    else
      setupType = "standalone"
    end if
  else
    setupType = setupParams.setupType
  end if

  ' only set splash screen if device supports video
  videoMode = CreateObject("roVideoMode")
	if type(videoMode) = "roVideoMode" then
    deviceSetupSplashScreen = SetDeviceSplashScreenMessageByType(invalid, setupType+"_initialize", msgPort)
  end if

  ' Create datagram socket to wait for bootstrap messages
  dgSocket = CreateDatagramSocket(setupParams, msgPort, registrySection)

  SendStatusPayload(dgSocket, version, setupParams.wsUdpSocketPort%)
  
  ' retrieve and parse featureMinRevs.json
  featureMinRevs = ParseFeatureMinRevs()
  
  ' write identifying data to registry
  registrySection.Write("tz", setupParams.timezone$)
  registrySection.Write("un", setupParams.unitName$)
  registrySection.Write("unm", setupParams.unitNamingMethod$)
  registrySection.Write("ud", setupParams.unitDescription$)
  
  if Len(setupParams.configVersion$) > 0 then
    registrySection.Write("cfv", setupParams.configVersion$)
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
  
  ' set the time zone
  if setupParams.timezone$ <> "" then
    systemTime = CreateObject("roSystemTime")
    systemTime.SetTimeZone(setupParams.timezone$)
    systemTime = invalid
  end if
  
  ' diagnostic web server
  SetDWS(setupParams, registrySection)
  
  ' usb content update password
  usbUpdatePassphrase$ = setupParams.usbUpdatePassword$
  if usbUpdatePassphrase$ = "" then
    registrySection.Delete("uup")
  else
    registrySection.Write("uup", usbUpdatePassphrase$)
  end if
  
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
  
  ' clear uploadLogs handler
  registrySection.Write("ul", "")

  ' bsnCloudEnabled === False, bsnce === False then DISABLE_BSN_CLOUD (Danbert) = true, set bsnce and restart
  ' bsnCloudEnabled === undefined, bsnce === undefined, restart to clear bsnce
  ' This variable will never be set to true. Only will ever be undefined or false, set in device setup files. Bootstrap will look for bsnce reference
  ' Will put a RestartApplication() at the end of setup if setupParams.restartRequired = true.
  if IsTruthy(setupParams.bsnCloudEnabled) <> invalid and IsTruthy(setupParams.bsnCloudEnabled) = false and supervisorRegistrySection.Read("bsnce") <> "False" then
    supervisorRegistrySection.Write("bsnce", "False")
    supervisorRegistrySection.Flush()
    setupParams.restartRequired = true
  else if IsTruthy(setupParams.bsnCloudEnabled) = invalid and oldBsnce = "False" then ' bsnce registry no longer requested to be false from setup files
    setupParams.restartRequired = true
  end if
  
  ' perform network diagnostics if enabled
  if setupParams.networkDiagnosticsEnabled then
    PerformNetworkDiagnostics(setupParams.testEthernetEnabled, setupParams.testWirelessEnabled, setupParams.testInternetEnabled)
  end if
  
  ' setup complete - wrap it up

  ' Recovery
  SetRecoveryHandlerUrl(setupParams, registrySection)
  registrySection.Flush()

  registrationFlag = registrySection.Read("registered_with_bsn")
  if registrationFlag <> "yes" then
    WaitRegistrationUdpMessage(60, false, msgPort, setupParams.wsUdpSocketPort%)
  end if

  if setupType = "lfn" then
    
    registrySection.Write("sut", "LFN")
    registrySection.Write("susse", "True")
    registrySection.Delete("registration_in_progress")
    registrySection.Flush()
    
    if registrySection.Read("ru") = "" then
      MoveFile("pending-autorun.brs", "autorun.brs")
      diagnostics.printDebug("LFN setup complete")
      RestartIfNecessary(setupParams, true)
    else
      ' case of application url set, restart to trigger recovery
      MoveFile("autorun.brs", "autorun_invalid.brs")
      diagnostics.printDebug("LFN setup with application url complete")
      RestartApplication()
    end if
    
  else if localToStandaloneSyncSpec then
    registrySection.Write("sut", "Standalone")
    registrySection.Delete("registration_in_progress")
    registrySection.Flush()
  
    MoveFile("pending-autorun.brs", "autorun.brs")

    diagnostics.printDebug("Local to standalone setup complete")
        
    RestartIfNecessary(setupParams, true)
    
  else if setupType = "partnerapplication" then
    registrySection.Write("sut", "PartnerApplication")
    registrySection.Delete("registration_in_progress")
    registrySection.Flush()

    if registrySection.Read("ru") <> "" then
    ' case of application url set, restart to trigger recovery
      MoveFile("autorun.brs", "autorun_invalid.brs")
      diagnostics.printDebug("Partner Application setup complete")
      RestartApplication()
    else
      diagnostics.printDebug("Cannot find partner application url in partner application setup")
      ' device setup splash screen for no application url in partner application setup type
      if type(videoMode) = "roVideoMode" then
        deviceSetupSplashScreen = SetDeviceSplashScreenMessageByType(deviceSetupSplashScreen, "no_application_url", msgPort)
      end if
    end if

    while true
      wait(0, msgPort)
    end while

  else if setupType = "standalone" then

    registrySection.Write("sut", "Standalone")
    registrySection.Flush()

    diagnostics.printDebug("Standalone setup complete")

    RestartIfNecessary(setupParams, false)
    ' device setup splash screen for standalone
    if type(videoMode) = "roVideoMode" then
      deviceSetupSplashScreen = SetDeviceSplashScreenMessageByType(deviceSetupSplashScreen, "standalone_complete", msgPort)
    end if

    registrySection.Delete("registration_in_progress")
    registrySection.Flush()
    
    while true
      wait(0, msgPort)
    end while
    
  else
    ' Error handling, we should never see this case.
    diagnostics.printDebug("Unknown setup type: "+setupType)

    if type(videoMode) = "roVideoMode" then
      ' device setup splash screen for unknown setup type
      msgType = "unknown_type_"+setupType
      deviceSetupSplashScreen = SetDeviceSplashScreenMessageByType(deviceSetupSplashScreen, msgType, msgPort)
    end if

    registrySection.Delete("registration_in_progress")
    registrySection.Flush()

    while true
      wait(0, msgPort)
    end while

  end if
  
end sub


Function ParseAutoplay(setup_sync as object) as object
  
  setupParams = { }
  
  ParseAutoplayCommon(setupParams, setup_sync)
  
  return setupParams
  
end function

