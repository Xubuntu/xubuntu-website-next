---
title:       "FAQ for Xubuntu 12.10 Quantal Quetzal"
date:        2012-11-30 19:36:11
slug:        faq-1210-quantal-quetzal
release:     "12.10"
serie:       faq
category:    articles
author:      Pasi Lallinaho
author_nick: knome
---

Welcome! To provide a better experience to all the Xubuntu users we gather what we consider to be common questions any user might come to find.

We have been doing this for the last few releases, check the previous FAQ to find out interesting and probably helpful information about your system.

In this particular release of Xubuntu we have moved out of Xfce 4.8, into the most recent 4.10, this carries some issues when updating that we would like to help you overcome:

### 1. After upgrading to Xubuntu 12.10 my panel icons are all group together to one side of the panel, how do I make them occupy the whole of it?

This happens because of some changes on the xfce 4.10 panel structures, you need to *add a separator item* to the panel and set it to *expand* to fix this issue.

### 2. Where did the messaging menu go?

Due to constraints unavoidable by the Xubuntu team the messaging menu is not available in Xubuntu 12.10, you must use Xubuntu 12.04 if you wish to have this menu/indicator.

### 3. I don't see my sound indicator anymore, how do I get it back?

Right-click on a blank area of the panel and select *Panel **»** Add New Items...* Find the Indicator Plugin in the list, select it and click the "Add" button.

*Note:* Use *Panel **»** Panel Preferences... **»** Items* to move it to a location of your preferences.

### 4. Duplicated partitions are shown in the Thunar sidebar and the desktop

Unfortunately, this is a known bug for some users. There is a fix in the -proposed repository, which you may enable in the Software Center and upgrade thunar to the new version.

*Warning:* This archive is "proposed" because it's now available for testing, it is not yet a fully-tested part of the system and may have packages that are unstable.

### 5. Alternate images are no longer available, how do I install Xubuntu with the text installer?

Use the [ubuntu-core](https://wiki.ubuntu.com/Core) image and choose the selection for installing Xubuntu.

### 6. When I drag a window to the upper border of the screen, it resizes to the width of the screen and half its height, how do I prevent this?

This is a new feature in Xfce 4.10, which is included in Xubuntu 12.10. To disable this, go into *Settings Manager **»** Window Manager Tweaks **»** Accessibility* and uncheck "Automatically tile windows when moving toward the screen edge".

### 7. How do I search for proprietary drivers available on my system?

In order to enable proprietary drivers which are packaged for Xubuntu, you open the Ubuntu Software Center and go to *Edit **»** Software Sources **»** Additional Drivers*. This will allow you to select which drivers you wish to use.

### 8. Thunar loads very slowly on first launch, how do I fix that?

Unfortunately, this is a [known bug](https://bugs.launchpad.net/ubuntu/+source/thunar/+bug/775117). See [FAQ for Xubuntu 12.04 Precise Pangolin](http://xubuntu.org/news/faq-1204-precise/) for more on how to work around this.

### 9. Is there a way to use folders shared from Windows?

Yes, using Gigolo. See [FAQ for Xubuntu 12.04 Precise Pangolin](http://xubuntu.org/news/faq-1204-precise/) for more.
