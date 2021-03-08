Sub Main()
  device = GetMountedDevice()
  package = CreateObject("roBrightPackage", device + "autorun.zip")
  Notify("Unzipping the setup files")
  package.Unpack(device)
  MoveFile(device + "autorun.zip", device + "autorun.zip_invalid")
  RestartApplication()
end Sub

Function GetMountedDevice() As String

    devices = ["USB1:/","SD:/","SD2:/","SSD:/"]
    for each device in devices
        if DeviceIsMounted(device) then
            return device
        endif
    next

    return ""

End Function

Function DeviceIsMounted(deviceName$ As String) As Boolean

    du = CreateObject("roStorageInfo", deviceName$)
    if type(du) = "roStorageInfo" then
        return true
    endif
    return false

end Function

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Sub Notify(message As String)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  print message
  gaa =  GetGlobalAA()
	If gaa.tw = invalid Then
        videoMode = CreateObject("roVideoMode")
        if not type(videoMode) = "roVideoMode" then return

		resX = videoMode.GetResX()
		resY = videoMode.GetResY()

		textParameters = CreateObject("roAssociativeArray")
		textParameters.LineCount = 1
		textParameters.TextMode = 2
		textParameters.Rotation = 0
		textParameters.Alignment = 1
	End If

	If gaa.tw = invalid Then
		r=CreateObject("roRectangle",0,resY/2-resY/32,resX,resY/32)
		gaa.tw = CreateObject("roTextWidget", r, 1, 2, textParameters)
	End If

	gaa.tw.Clear()
	gaa.tw.PushString(message)
	gaa.tw.Show()

End Sub
