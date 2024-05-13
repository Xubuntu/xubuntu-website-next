---
title:       "Help test Xubuntu!"
date:        2012-03-25 15:56:23
slug:        help-test-xubuntu
release:     "12.04"
serie:       
category:    articles
author:      Elizabeth K. Joseph
author_nick: pleia2
---

**Xubuntu Beta 2 is coming out this week and we need testers!**

Testing is an excellent way to get involved with Xubuntu. It's a vital part of our release cycle and anyone with a virtual machine (or even better, a spare computer!) can help out with it.

The Xubuntu community maintains extensive documents related to testing, we highly recommend you browse through these as you get more involved with testing:

<https://wiki.ubuntu.com/Xubuntu/Testing>

*But as a quick start...*

Testing Xubuntu is made up of two key sections:

The **Xubuntu [Testing Info](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo)** page, explaining more about the testing process, including which tests you should conduct.

- The [Short Test](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo/Short) page, containing specific instructions on how to perform a basic test of Xubuntu. This page includes procedures for both the desktop cd and post-install testing.
- The [Long Test](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo/Long) page, containing instructions on how to perform a more thorough test of Xubuntu.

**The [QA ISO Testing Tracker](http://iso.qa.ubuntu.com/qatracker/build/xubuntu/all)** page, where testers should report their ISO test results.

- This tracker is used by both the Ubuntu Release Manager and Ubuntu QA to determine which images will be released for any given milestone.

These two testing methods are typically used in tandem, but when you're just starting out you can "get your feet wet" by trying what you're most comfortable with. You may notice that our testing document document includes more fine-tuned distinctions between [Daily images and Milestone releases](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo#Daily_images_and_Milestone_releases) with specific tests we ask people do for each which will help determine whether we're moving forward with a specific milestone release.

To do either of these, you’ll first want to download the ISO as documented on the [Testing Info](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo) page.

Once you have your .iso file:

- Burn it to a CD-ROM
- Put it on a USB stick (try usb-creator-gtk or UNetbootin)
- Use the ISO to load up a new virtual machine in VirtualBox (or similar)

Now you can select what tests you wish to run. Can you do an install to test the ISO on the [QA ISO Testing Tracker](http://iso.qa.ubuntu.com/qatracker/build/xubuntu/all)? Or perhaps just do a live session where you do a [Short Test](https://wiki.ubuntu.com/Xubuntu/Testing/TestingInfo/Short)?

While doing these tests it is important to [file bugs](https://help.ubuntu.com/community/ReportingBugs). If you find a bug, please, search if it has already been reported, and if it hasn't, report it yourself. You should also refer to the [debugging guide](https://wiki.ubuntu.com/DebuggingProcedures) for that specific package (if available) to make sure you are aware of known issues and have attached the relevant log files.

Have any trouble? Have any questions? Not sure where to report a bug, or if it’s a bug? Join us in #xubuntu-devel on irc.freenode.net (use a client, or access via your browser [here](http://webchat.freenode.net/?channels=xubuntu-devel)) or on the [xubuntu-devel mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel). Please be patient when using either of these resources, our team is small so it may take us some time to respond.

Happy testing!
