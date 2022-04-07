
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "11",
    deviceName: "Android Emulator",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.ScrollBar3",
    automationName: "UiAutomator2"
  }
};
// dumpsys window | grep mCurrentFocus
// mCurrentFocus=Window{aafb086 u0 io.appium.android.apis/io.appium.android.apis.view.TextFields}
const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

async function main () {
  const client = await wdio.remote(opts);


  await client.deleteSession();
}

main();