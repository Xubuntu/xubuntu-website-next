---
title:       "Xubuntu 15.04 Beta 1"
date:        2015-02-26 19:20:06
slug:        xubuntu-15-04-beta-1
release:     "15.04"
serie:       
category:    announcements
author:      flocculant
author_nick: flocculant
---

The Xubuntu team is pleased to announce the immediate release of Xubuntu 15.04 Beta 1. This is the first beta towards the final release in April.

The first beta release also marks the end of the period to land new features in the form of Ubuntu Feature Freeze. This means any new updates to packages should be bug fixes only, the Xubuntu team is committed to fixing as many of the bugs as possible before the final release.

*Please note the important install known issue below and at [Bug 1425690: "New windows are created offscreen"](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1425690)*

**The Beta 1 release is available for download by torrents and direct downloads from**<http://cdimage.ubuntu.com/xubuntu/releases/vivid/beta-1/>

Highlights and known issues
---------------------------

### New features and enhancements

- [LightDM GTK Greeter Settings](https://launchpad.net/lightdm-gtk-greeter-settings/) tool added
- development wallpaper introduced
- xfce4-power-manager now handles light-locker's settings in its "Security" tab
- xfce4-panel now has an intelligent hiding mode
- xfwm4 has window previews, better support for CSD and corner-tiling
- the display dialog now has improved support for multiple monitors
- the appearance dialog shows previews of themes' palettes and icon-themes
- Thunar now has improved keyboard navigation

### Known Issues

**Currently installing is only functioning correctly from the livesession install icon.**

- From either the boot screen OR the try/install dialogue - directly installing has windows created offscreen, this can be either the first install option screen, or where that works - the final Installation Complete dialogue goes offscreen. ([1425690](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1425690))
- It is possible to move the *offscreen* windows, ensure that ubiqity is focused (alt+tab) then with alt+space+m and then Move the offscreen dialogues can be moved so they are visible.
- If you boot to *Try* from the boot screen or from the Try/Install dialogue - tests have shown that these options function correctly.

#### Other Known Issues

- wrapper bug on clean installs ([1425401](https://bugs.launchpad.net/ubuntu/+source/mate-panel/+bug/1425401))
- Mugshot camera does not initialize ([1414443](https://bugs.launchpad.net/ubuntu/+source/mugshot/+bug/1414443))

### New application versions in the Xubuntu packageset

- Thunar 1.6.5
- Catfish 1.2.2.1
- Xfwm4 4.11.3
- xfce4-panel (4.11.2)
- lightdm-gtk-greeter (2.0.0)
- xfce4-settings (4.11.4)
- xfce4-power-manager (1.4.2)
- xfce4-whiskermenu-plugin (1.4.3)
- Menulibre (2.0.6-1ubuntu1)
- Mugshot (0.2.5.1)

### Other changes

- Albatross, Bluebird, and Orion are no longer installed by default
