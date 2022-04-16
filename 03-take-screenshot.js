const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Android Emulator",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);
  await client.startRecordingScreen()

  await client.pause(3000)
  await client.startActivity('com.android.dialer', 'com.android.dialer.main.impl.MainActivity')
  await client.pause(3000)
  const base64Data = await client.stopRecordingScreen()
  console.log(base64Data);
  await client.pause(3000)
  await client.deleteSession()
}

main();
/**
* @Author:: ken
* @Date: 2022-04-16
appium 协议不支持屏幕截图，只支持屏幕录制
webdrive 协议支持屏幕， dom节点截图


 Responding to client with driver.startActivity() result: null
[HTTP] <-- POST /wd/hub/session/4e123135-a6bc-43e6-9bdd-412778d7ec24/appium/device/start_activity 200 2268 ms - 14
[HTTP] 
[HTTP] --> POST /wd/hub/session/4e123135-a6bc-43e6-9bdd-412778d7ec24/appium/stop_recording_screen
[HTTP] {}
[W3C (4e123135)] Calling AppiumDriver.stopRecordingScreen() with args: [null,"4e123135-a6bc-43e6-9bdd-412778d7ec24"]
[ADB] Getting IDs of all 'screenrecord' processes
[ADB] Running 'C:\Users\ken\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s 192.168.174.101:5555 shell pgrep -f \(\[\[:blank:\]\]\|\^\)screenrecord\(\[\[:blank:\]\]\|\$\)'
[ADB] Running 'C:\Users\ken\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s 192.168.174.101:5555 pull /sdcard/4e1cd389.mp4 C:\Users\ken\AppData\Local\Temp\2022316-12072-1ezo3j5.mi51\4e1cd389.mp4'
[ADB] Running 'C:\Users\ken\AppData\Local\Android\Sdk\platform-tools\adb.exe -P 5037 -s 192.168.174.101:5555 shell rm -rf /sdcard/4e1cd389.mp4'
[AndroidDriver] The size of the resulting screen recording is 0 B
[W3C (4e123135)] Responding to client with driver.stopRecordingScreen() result: ""
[HTTP] <-- POST /wd/hub/session/4e123135-a6bc-43e6-9bdd-412778d7ec24/appium/stop_recording_screen 200 595 ms - 12
[HTTP] 
*/