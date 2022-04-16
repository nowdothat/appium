
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Android Emulator",
    // app: "http://appium.github.io/appium/assets/ApiDemos-debug.apk",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};
// dumpsys window | grep mCurrentFocus
// mCurrentFocus=Window{aafb086 u0 io.appium.android.apis/io.appium.android.apis.view.TextFields}
async function main () {
  const client = await wdio.remote(opts);

  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World--ken!");
  const value = await field.getText();
  console.log(value, 'value');
  // await client.deleteSession();
}

main();