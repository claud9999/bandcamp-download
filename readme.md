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
  a. node.js + Puppeteer
  b. python3
  c. sqlite3
  d. bash
1. Open your web browser of choice (that has developer tools installed)
  a. Log into bandcamp
  b. Browse to your collection
  c. Using your developer tools, switch to "network" and click the first
     (html) request. Find the "Cookie" field and copy its contents to
     the listall script.
2. Run listall, it should create a Sqlite3 database containing all of your
   collection. "sqlite3 bc.db 'select * from items'" should give you all.
3. Run "node configure-chromium.js", which should open the Chromium browser for you to configure it:
   a. Configure the download folder by clicking the three dots, click "settings", "advanced", and changing the "Location" under the "Downloads" heading.
   b. Log into bandcamp.
   c. Go to your collection and click "download" for any album. Select the
      format you'd like to download and download that album as a test.
   d. Close out the browser and ctrl-c the script if it's still running.
4. Run "download_all" to start downloading your collection.
