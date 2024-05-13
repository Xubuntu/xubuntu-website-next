---
title:       "Xubuntu 23.04 released!"
date:        2023-04-20 02:41:24
slug:        xubuntu-23-04-released
release:     "23.04"
serie:       
category:    announcements
author:      Sean Davis
author_nick: bluesabre
---

The Xubuntu team is happy to announce the immediate release of Xubuntu 23.04.

Xubuntu 23.04, codenamed **Lunar Lobster**, is a regular release and will be supported for 9 months, until January 2024.

![](/assets/articles/2023/xubuntu-23.04.png)
Xubuntu 23.04, featuring the latest updates from Xfce 4.18 and GNOME 44.

Xubuntu 23.04 features the latest Xfce 4.18. Xfce 4.18 delivers a stable desktop environment with a number of performance improvements and new features to enjoy. In particular, the Thunar file manager benefits from a new image preview feature, undo and redo functionality, file highlights, and recursive search. Check out the [Xfce 4.18](https://www.xfce.org/about/tour418) tour for more details!

Xubuntu 23.04 also welcomes **Xubuntu Minimal** as an official subproject. Xubuntu Minimal is a slimmed down version of Xubuntu that only includes the bare essentials: the desktop, a few Xfce components, and the Xubuntu look and feel. Longtime Xubuntu fans may better know this as *[Xubuntu Core](https://xubuntu.org/news/introducing-xubuntu-core/)*. After nearly eight years of being a supported, but community-built project, we're happy to finally publish downloads along with the main Xubuntu version. Many thanks to the community for keeping the dream alive all these years!

The **final release images** are available as torrents and direct downloads from [xubuntu.org/download/](https://xubuntu.org/download/).

As the main server might be busy in the first few days after the release, we recommend using the torrents if possible.

We’d like to thank everybody who contributed to this release of Xubuntu!

Highlights and Known Issues
---------------------------

### Highlights

- **Xfce 4.18**, released in December 2022, is included in Xubuntu 23.04.
- **Xubuntu Minimal** is included as an officially supported subproject.
- **Pipewire** (and wireplumber) are now included in Xubuntu.

### Known Issues

- The shutdown prompt may not be displayed at the end of the installation. Instead you might just see a Xubuntu logo, a black screen with an underscore in the upper left hand corner, or just a black screen. Press Enter and the system will reboot into the installed environment. (LP: [\#1944519](https://bugs.launchpad.net/ubuntu-release-notes/+bug/1944519))
- The screensaver unlock dialog crashes after unlocking. The session can still be locked and unlocked after this crash. We're working on a fix and hope to publish it in the next few weeks. (LP: #[2012795](https://bugs.launchpad.net/ubuntu/+source/xfce4-screensaver/+bug/2012795))
- Xorg crashes and the user is logged out after logging in or switching users on some virtual machines, including GNOME Boxes. (LP: #[1861609](https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609))

For more obscure known issues, information on affecting bugs, bug fixes, and a list of new package versions, please refer to the [Xubuntu Release Notes](https://wiki.xubuntu.org/releases/23.04/release-notes).

The main [Ubuntu Release Notes](https://discourse.ubuntu.com/t/lunar-lobster-release-notes/31910) cover many of the other packages we carry and more generic issues.

Support
-------

**For support** with the release, navigate to [Help &amp; Support](https://xubuntu.org/help/) for a complete list of methods to get help.
