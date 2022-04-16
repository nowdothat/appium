
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    "platformName": "Android",
    "platformVersion": "10",
    "deviceName": "Android Emulator",
    "appPackage": "io.appium.android.apis",
    "appActivity": ".view.ScrollBar3",
    "automationName": "UiAutomator2"
  }
};
// dumpsys window | grep mCurrentFocus
// mCurrentFocus=Window{aafb086 u0 io.appium.android.apis/io.appium.android.apis.view.TextFields}

async function main () {
  const client = await wdio.remote(opts);

  // const select = 'new UiSelector().index(1)'
  // const button = await client.$(`android=${select}`)
  // await button.setValue('123');

  const element = await client.$$(`android=${'new UiSelector().className(android.widget.ScrollView)'}`)[1].$(`android=${'new UiSelector().className(android.widget.TextView)'}`)

  await element.getText()
  // await element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}) // 报错了

  await client.pause(9000)
  await client.deleteSession();
}

main();