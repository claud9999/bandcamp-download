const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        userDataDir: './chromium-config',
        headless:false
    });
    var page = await browser.newPage();

    console.log("NOW!!!! Configure the default download location, log into bandcamp, download a test album [and select the format you'd like all your downloads in] and close the browser.")

    await page.waitForTimeout(200000);

    console.log("Hope you're done, I'm closing it out!");

    browser.close();
})();
