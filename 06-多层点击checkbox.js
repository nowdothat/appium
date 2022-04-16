
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    "platformName": "Android",
    "platformVersion": "10",
    "deviceName": "Android Emulator",
    "appPackage": "io.appium.android.apis",
    "appActivity": "io.appium.android.apis.ApiDemos",
    "automationName": "UiAutomator2"
  }
};

const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
async function oneAsync (time) {
  await sleep(time)
}
async function main () {
  const client = await wdio.remote(opts);
  await oneAsync(3000)

  // const notification = await client.$('android.widget.TextView');
  // await notification.waitForExist({ timeout: 5000 });

  // java语法成功
  const selector = 'new UiSelector().text("Accessibility").className("android.widget.TextView")'
  const button = await client.$(`android=${selector}`)
  await button.click()

  const selector2 = 'new UiSelector().text("Accessibility Node Querying").className("android.widget.TextView")'
  const button2 = await client.$(`android=${selector2}`)
  await button2.click()


  const elem = await client.$('~Task Conquer World')
  console.log(elem,'---elem');


  // const checkbox = await client.$('android.widget.CheckBox')
  // console.log(checkbox, 'checkbox');
  const selector3 = 'new UiSelector().checked(false).className("android.widget.CheckBox")'
  const button3 = await client.$(`android=${selector3}`)
  console.log(button3, 'button3');
  await button3.click()

  await oneAsync(3000)
  await client.deleteSession();
}

main();
/**
* @Author:: ken
* @Date: 2022-4-10
已完成click点击
*/