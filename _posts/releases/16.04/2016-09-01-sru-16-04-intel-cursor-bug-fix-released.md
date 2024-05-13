---
title:       "SRU for 16.04: Intel cursor bug fix released"
date:        2016-09-01 18:58:36
slug:        sru-16-04-intel-cursor-bug-fix-released
release:     "16.04"
serie:       
category:    
author:      Elizabeth K. Joseph
author_nick: pleia2
---

When we [announced](https://xubuntu.org/news/xubuntu-16-04-release/) the release of Xubuntu 16.04 back in April there were a few known issues, but none has been more frustrating to users than this one:

> When returning from lock, the cursor disappears on the desktop, you can bring the cursor back with Ctrl+Alt+F1 followed by Ctrl+Alt+F7

Most of the other bugs were fixed by the time 16.04.1 was released in July, but this one lingered while developers tested the `xserver-xorg-video-intel` package that had the fix in the proposed repository in August.

Thanks to the work of those developers and the members of our community who tested the package [upon our request](https://lists.ubuntu.com/archives/xubuntu-devel/2016-August/011279.html) in August, we're delighted to announce that the fix has been included as a Stable Release Update (SRU)!

This update will be applied to your system with all other regular updates, no special action is needed on your part.
