---
title:   Xubuntu 24.04 released!
release: "24.04"
date:    2024-04-25
---

The Xubuntu team is happy to announce the immediate release of Xubuntu 24.04.

Xubuntu 24.04, codenamed **Noble Numbat**, is a long-term support (LTS) release and will be supported for 3 years, until 2027.

![Xubuntu 24.04, featuring the latest updates from Xfce 4.18 and GNOME 46.](/assets/releases/24.04/screenshot.png)


Xubuntu 24.04 features the latest updates from Xfce 4.18, GNOME 46, and MATE 1.26. For new users and those coming from Xubuntu 22.04, you’ll appreciate the performance, stability, and improved hardware support found in Xubuntu 24.04. Xfce 4.18 is stable, fast, and full of user-friendly features. Enjoy frictionless bluetooth headphone connections and out-of-the-box touchpad support. Updates to our icon theme and wallpapers make Xubuntu feel fresh and stylish.

The **final release images** for **Xubuntu Desktop** and **Xubuntu Minimal** are available as torrents and direct downloads from <a href="{{ "/download" | relative_link }}">xubuntu.org/download</a>.

As the main server might be busy in the first few days after the release, we recommend using the torrents if possible.

We’d like to thank everybody who contributed to this release of Xubuntu!

### Highlights and Known Issues

#### Highlights

- **Xfce 4.18** is included and well-polished since it’s initial release in December 2022
- **Xubuntu Minimal** is included as an officially supported subproject
- GNOME Software has been replaced by **Snap Store** and **GDebi**
- **Snap Desktop Integration** is now included for improved snap package support
- **Firmware Updater** has been added to enable firmware updates in Xubuntu is included to support firmware updates from the Linux Vendor Firmware Service (LVFS)
- **Thunderbird** is now distributed as a Snap package
- Ubiquity has been replaced by the Flutter-based **Ubuntu Installer** to provide fast and user-friendly installation
- **Pipewire** (and wireplumber) are now included in Xubuntu
- Improved hardware support for **bluetooth headphones** and **touchpads**
- **Color emoji** is now included and supported in Firefox, Thunderbird, and newer Gtk-based apps
- Significantly improved **screensaver** integration and stability

#### Known Issues

- The shutdown prompt may not be displayed at the end of the installation. Instead you might just see a Xubuntu logo, a black screen with an underscore in the upper left hand corner, or just a black screen. Press Enter and the system will reboot into the installed environment. (LP: [#1944519](https://bugs.launchpad.net/ubuntu-release-notes/+bug/1944519))
- Xorg crashes and the user is logged out after logging in or switching users on some virtual machines, including GNOME Boxes. (LP: [#1861609](https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609))
- You may experience choppy audio or poor system performance while playing audio, but only in some virtual machines (observed in VMware and VirtualBox)
- OEM installation options are not currently supported or available, but will be included for Xubuntu 24.04.1

For more obscure known issues, information on affecting bugs, bug fixes, and a list of new package versions, please refer to the [Xubuntu Release Notes](https://wiki.xubuntu.org/releases/24.04/release-notes).

The main [Ubuntu Release Notes](https://discourse.ubuntu.com/t/noble-numbat-release-notes/39890) cover many of the other packages we carry and more generic issues.

### Support

For support with the release, navigate to [Help & Support]({{ "/help" | relative_link}}) for a complete list of methods to get help.
