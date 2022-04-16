
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
  // 查看包的运行状态
  await client.pause(3000)
  const appId = 'com.android.dialer'
  await client.startActivity('com.android.dialer', 'com.android.dialer.main.impl.MainActivity')
  const status = await client.queryAppState(appId) //4
  console.log(status,'---');
  console.log(await client.queryAppState('io.appium.android.apis')); //3
  await client.pause(3000)
  await client.deleteSession();
}

main();
/**
* 作用: 查看包的运行状态
* by: 'ken'
* 创建时间: 2022-04-16
: 0 is not installed. 1 is not running. 2 is running in background or suspended. 3 is running in background. 4 is running in foreground
*/