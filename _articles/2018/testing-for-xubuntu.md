---
title:       "Testing for Xubuntu"
date:        2018-03-04 08:21:05
release:     ""
serie:       
category:    
author:      flocculant
author_nick: flocculant
---

<span style="font-weight: 400;">Xubuntu 18.04 “Bionic Beaver” is just around the corner. The first beta milestone arrives next week, and the final release is a little over a month away. 18.04 is an LTS release, meaning it has a 3-year support cycle and is definitely recommended for all users. Or it would be, if we knew it was ready. Stick around... this is a bit of a long read, but it’s important.</span>

<span style="font-weight: 400;">The </span>[<span style="font-weight: 400;">ISO Tracker</span>](http://iso.qa.ubuntu.com/)<span style="font-weight: 400;"> has seen little activity for the last few development cycles. We know we have some excited users already using and testing 18.04. But without testing results being recorded anywhere, we have to assume that nobody is testing the daily images and milestones. And this has major implications for both the 18.04 release and the project as a whole.</span>

<span style="font-weight: 400;">From the perspective of the QA team, and with full support from the development team - If we aren’t able to gauge an ISO at any of the milestones (Beta, Final Beta, Release Candidate, and the LTS Point Release), how can we possibly mark those as “Ready for Release”? And why should we?</span>

<span style="font-weight: 400;">It is notable that following any of our releases, often within less than a day, we have multiple reports of issues that were NEVER seen on the ISO Tracker. With the current </span>[<span style="font-weight: 400;">SRU procedure</span>](https://wiki.ubuntu.com/StableReleaseUpdates)<span style="font-weight: 400;">, this means that all users will now have a minimum of 7 days before they can possibly see a fix. With development and testing time, these fixes may take significantly longer or never even make it into the 3-year support release.</span>

<span style="font-weight: 400;">Xubuntu is a community project. That includes all of you. If the community doesn’t care until it’s too late, what should we take from that? In fact, community support is part of the </span>[<span style="font-weight: 400;">deal</span>](https://wiki.ubuntu.com/RecognizedFlavors)<span style="font-weight: 400;"> every flavor makes with Canonical to enable all of the things that make it possible for the flavor to exist. It’s actually the first bullet point in remaining a recognized flavor:</span>

- <span style="font-weight: 400;">Image has track record of community interested in creating, supporting and promoting its use.</span>

<span style="font-weight: 400;">Ready to help? Let’s do this.</span>
--------------------------------------------------------------------

<span style="font-weight: 400;">It is now time for the community to step up. Test ISOs, test the versions of packages you regularly use, check for any regressions, and record your results! Our ISO builds </span>**EVERY** <span style="font-weight: 400;">day around 0200UTC and the newest daily ISO is then available shortly after. The daily build can always be found on the </span>[<span style="font-weight: 400;">daily builds</span>](http://cdimage.ubuntu.com/xubuntu/daily-live/current/)<span style="font-weight: 400;"> page, regardless of the current development release name.</span>

<span style="font-weight: 400;">For those of you who do not believe you can help… you can!</span>

### <span style="font-weight: 400;">Regression Testing</span>

<span style="font-weight: 400;">How hard is it to check for regression? Use the software you use every day. Does it work differently than it used to?</span>

- <span style="font-weight: 400;">If not, no regression!</span>
- <span style="font-weight: 400;">If it does, but works better than before, no regression!</span>
- <span style="font-weight: 400;">Anything else, you’ve found a regression.[ Report it !](https://help.ubuntu.com/community/ReportingBugs#Reporting_non-crash_hardware_and_desktop_application_bugs) </span>

### <span style="font-weight: 400;">ISO Testing</span>

<span style="font-weight: 400;">How hard is it to check an ISO? If you have at 1Gb of disk space available, read on.</span>

- <span style="font-weight: 400;">If you have sufficient disk space for a 10Gb file, you can probably use a virtual machine to run installation and post-installation tests.</span>
- <span style="font-weight: 400;">If you are able to virtualize but lack the disk space for a full installation, consider using a VM to verify the ISO boots and applications run on the live disk.</span>
- <span style="font-weight: 400;">If you have physical media available, either a DVD-R (RW to not waste the media on daily tests) or 2+ Gb capacity USB stick, you can boot Xubuntu from the media and perform installation, post-installation, and live testing.</span>

### <span style="font-weight: 400;">More Information</span>

<span style="font-weight: 400;">In May of 2017, we ran a session on IRC for prospective testers. Other than our regular visitors, one new prospective tester attended and shared in the discussion. The logs for that session are</span>[ <span style="font-weight: 400;">still available</span>](https://irclogs.ubuntu.com/2017/05/12/%23xubuntu-devel.html)<span style="font-weight: 400;"> if you want to spend 10 minutes checking out how easy it is to help.</span>

<span style="font-weight: 400;">We hope that you’ll join us in making Xubuntu 18.04 a success. We think it’s going to be the best release ever, but if the community can’t find the time to contribute to the release, we can’t guarantee we can have one.</span>
