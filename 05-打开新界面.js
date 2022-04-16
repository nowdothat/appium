
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
  oneAsync(3000)
  const $ = client.$
  
  // const androidButton = 'new UiSelector().text("Accessibility").className("android.widget.TextView")';
  // $(`android=${androidButton}`).click();


  // const selector = `new UiSelector().text("Access'ibility").className("android.widget.TextView")`
  // const button = await $(`android=${selector}`)
  // console.log(button);
  // await button.click()
  // client.start_activity("com.taobao.taobao", ".TBMainActivity")


  // await $('android=new UiSelector().resourceId("android:id/text1")').click();
    // $('android.widget.TextView').click();



  const data = await client.getCurrentActivity()
  console.log(data,'11');
  await client.startActivity("io.appium.android.apis", ".view.TextFields")
  const field = await client.$("android.widget.EditText");
  await field.setValue("Hello World--ken!");

  oneAsync(8000)

  await client.startActivity("com.android.dialer", ".main.impl.MainActivity")

  await oneAsync(9000)
  await client.deleteSession();
}

main();
