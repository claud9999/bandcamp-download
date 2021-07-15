# Bandcamp Download Suite

Download your complete collection via a mix of Python and Puppeteer.

## Notes

First, this is a work in progress; there are still a fair amount of
manual work required to get this to work properly.

Second, be gentle with the Bandcamp site, don't abuse it. This is by no
means official or sanctioned software.

Third, this software is provided as-is, with no guarantees or warrantees.
If it breaks your computer or opens a wormhole to the other side of the
universe, that's purely coincidental and I cannot be held liable for such
outcomes.

Fourth, this requires Puppeteer be run with "headless: false", as in you
will need to run this so that it can launch the Chromium browser UI. In fact,
you'll need to interact with that UI to configure some things.

## Using

0. You'll need a computer with a GUI + web browser and all of the following:
    1. node.js + Puppeteer
    2. python3
    3. sqlite3
    4. bash
1. Open your web browser of choice (that has developer tools installed)
    1. Log into bandcamp
    2. Browse to your collection
    3. Using your developer tools, switch to "network" and click the first
        (html) request. Find the "Cookie" field and copy its contents to
        the listall script.
2. Run listall, it should create a Sqlite3 database containing all of your
   collection. "sqlite3 bc.db 'select * from items'" should give you all.
3. Run "node configure-chromium.js", which should open the Chromium browser for you to configure it:
    1. Configure the download folder by clicking the three dots, click
        "settings", "advanced", and changing the "Location" under the
        "Downloads" heading.
    2. Log into bandcamp.
    3. Go to your collection and click "download" for any album. Select the
        format you'd like to download and download that album as a test.
    4. Close out the browser and ctrl-c the script if it's still running.
4. Run "dl_all" to start downloading your collection. It will download 20
   albums at a time and restart the browser between each batch to prevent
   memory/performance problems. Keep an eye on things, if you have items
   in your collection that can't be downloaded, you'll need to update the
   items table to mark it is "have=1".
