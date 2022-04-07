
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "11",
    deviceName: "Android Emulator",
    appPackage: "io.appium.android.apis",
    appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
async function main () {
  const client = await wdio.remote(opts);
  const status = client.status()
  console.log(status,'---');
  await field.setValue(`Hello World!,${status}`);
  sleep(3000)
  await client.deleteSession();
}

main();
/**
* @Author:: ken
* @Date: 2021-10-25
从结果上来看，并没有返回像文档所说的true/false,反而返回一个对象，但这个对象使用promise语法，貌似也无效，目前也无法通过日志查询
*/