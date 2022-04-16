
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
  await oneAsync(2000)

  // 以下内容会报错
  // console.log(typeof client.$);
  // console.log(client.$,'--￥');
  // const test$ = client.$
  // console.log(test$.__proto__);
  // console.log(test$.prototype === client.$.prototype);

  const button = await client.$('~Accessibility')
  await button.click()


  await oneAsync(3000)
  await client.deleteSession();
}

main();
