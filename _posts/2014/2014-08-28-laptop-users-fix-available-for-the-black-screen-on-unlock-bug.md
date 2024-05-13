---
title:       "Laptop users: Fix available for the black screen on unlock bug"
date:        2014-08-28 11:11:42
slug:        laptop-users-fix-available-for-the-black-screen-on-unlock-bug
release:     "14.04, 14.10"
serie:       
category:    
author:      Simon Steinbeiß
author_nick: ochosi
---

![screenlocker](/assets/articles/2014/preferences-desktop-screensaver.png)

If you experienced problems with logging into your session after suspending your laptop by closing the lid (and only this exact scenario!), your days of worry should be over now. Many users have commented on the [respective bugreport](https://bugs.launchpad.net/ubuntu/+source/xubuntu-default-settings/+bug/1303736), many of whom experienced different issues with suspending. This made the issue very difficult to pinpoint in the beginning for us technical folk and confusing for users too.

Sean Davis, Technical Lead of Xubuntu, put together the pieces we collected after identifying the issue and the fix landed in the 14.04.1 and 14.10 Beta 1 releases. This means that **the problem is fixed for**

- **New installs** of Xubuntu 14.04.1 or Xubuntu 14.10 Beta 1
- **New users** created with xubuntu-default-settings 14.04.5

All those of you who have been running Trusty since its release have to toggle a setting in order to **fix the issue for existing user-accounts:**

1. Open `Light Locker Settings` from the `Settings Manager`
2. Turn "Enable Light Locker" **Off**. Click "Apply".
3. Turn "Enable Light Locker" **On**. Click "Apply".

These steps have to followed manually because we never overwrite existing user settings. Obviously, if you previously had disabled Light Locker, the last step is sufficient.
