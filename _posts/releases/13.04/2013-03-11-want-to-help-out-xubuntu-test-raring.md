---
title:       "Want to help out Xubuntu? Test Raring!"
date:        2013-03-11 23:51:30
slug:        want-to-help-out-xubuntu-test-raring
release:     "13.04"
serie:       
category:    
author:      Pasi Lallinaho
author_nick: knome
---

It's again the time to call for more testers – Xubuntu Raring beta 1 is around.

Why help with testing?
----------------------

Testing is an excellent and easy way to get involved with Xubuntu. It’s a vital part of our release cycle and anyone with a virtual machine (or even better, a spare computer!) can help out with it. When you do testing you will work with most of the people involved in Xubuntu. Don't be afraid, we won't bite you!

What do I need to do?
---------------------

There are different ways of testing the ISOs for all of our releases. Here's a quick overview of the different tests we need to run:

1. **Installation testing** to make sure our ISO's are installable
2. **Live CD testing** to make sure the live CD environment works as expected (and to make sure persistency works on live USB)
3. **Post-installation testing** to make sure our applications work as expected
4. **Upgrade testing** to make sure upgrades from old releases work as expected

All the results from different tests are reported and recorded on the [Ubuntu ISO Tracker](http://iso.qa.ubuntu.com/). You will need a Ubuntu Single Sign-On account to log in and send results.

Finally, to run a test and report it so it helps the Xubuntu team, you need to do the following:

1. Go to the [Ubuntu ISO Tracker](http://iso.qa.ubuntu.com/) and Log in
2. Click **Raring Beta 1** and select your infrastructure from the **Xubuntu** product at the bottom of the page
3. Download the appropriate ISO (see **Link to download information** at the top of the page for download links as well as zsync commands)
4. Select a test you want to run – it's best to start with an installation test and then advance to post-installation tests to get the most out of your time
5. On any test page, you should see the testcase instructions (if you don't, click on **Testcase**) and follow them step by step
6. If you find bugs while running the test, add them to the report and if they don't exist, [file them](https://help.ubuntu.com/community/ReportingBugs)
7. In the **Bugs to look for** section you will see bugs that people have been experiencing with the same test before – specifically look out for these
8. Once you've finished with the testcase, **report your results**; select the overall **result** for the test and list any **bugs** you experienced during testing. Remember to click **Submit result** when you're done – *if you don't do this, the Xubuntu team doesn't get any benefit from the test!*

Need more information or help?
------------------------------

All of the different testing areas for Xubuntu follow more or less the same pattern. To get detailed instructions with pictures on how to report test results refer to the [ISO testing Walkthrough on the Ubuntu wiki](https://wiki.ubuntu.com/Testing/ISO/Walkthrough). You can also ask for help in our developer IRC channel [\#xubuntu-devel](http://etherpad.ubuntu.com/ep/search?query=xubuntu-devel) on Freenode.

Once you get more into testing, there are ways to make downloading the latest images and testing them easier for you. These include but are not limited to zsyncing new images, using Testdrive to manage your tests, etc... To read more about the Ubuntu Testing framework and the Ubuntu Quality Assurance team, read the [QA Team wiki](https://wiki.ubuntu.com/QATeam).
