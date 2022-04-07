
const wdio = require("webdriverio");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Android Emulator",
    appPackage: "com.taobao.taobao",
    appActivity: "com.taobao.tao.welcome.Welcome",
    noReset: true,
    automationName: "UiAutomator2"
  }
};

const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))

async function main () {
  const client = await wdio.remote(opts);
  // client === Browser {}
  const $ = client.$
  sleep(5000)
    .then(() => {
      console.log(client,'--');
      console.log(Object.getOwnPropertyNames(client.$.prototype.constructor),'--');
      // client.touchAction({
      //   action: 'tap',
      //   x: 1073,
      //   y: 1119
      // })
      console.log(client.$('//android.widget.FrameLayout[contains]'))
    })

}

main();