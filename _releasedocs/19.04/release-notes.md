---
layout:    page
release:   "19.04"
link_name: "Release Notes"
title:     "Xubuntu 19.04 Release Notes"
---

## Dropping 32-bit Images

[In December](https://lists.ubuntu.com/archives/xubuntu-devel/2018-December/011755.html), the team voted to discontinue 32-bit images for Xubuntu 19.04 and forward. If you want to continue using Xubuntu with 32-bit architectures, Xubuntu 18.04 is supported for 3 years, and the Xubuntu package set can be installed from the [Minimal CD](https://help.ubuntu.com/community/Installation/MinimalCD).

## Installer Issues

**It must be noted that it is close to impossible for our small team of testers to be in a position to work through all the varying parameters available during installation. We do however aim to test all the possible methods of installation (including for OEM and using encryption) available either on a virtual machine or on hardware (where hardware has been used during testing then Xubuntu QA will where possible make that known on the iso testing tracker). Further installation testing information can be on the Ubuntu installation release note(s) listed below**

_No current documented installer issues._

## General Issues

* Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple Pulseaudio plugins added to panel ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
* Xfce Task Manager: Tooltips become unresponsive ([1740578](https://bugs.launchpad.net/ubuntu/+source/xfce4-taskmanager/+bug/1740578))

### Ubuntu Generic Release Note

The main Ubuntu release [note](https://wiki.ubuntu.com/DiscoDingo/ReleaseNotes) covers both many of the other packages we carry and more generic issues.

## Major Updates

### Keyboard Shortcuts

Xubuntu 19.04 includes a few new keyboard shortcuts to make your workflow faster.

* **Shift + PrintScreen** will launch the Xfce Screenshooter's region capture mode.
* **F4** (in Thunar) will open a terminal in the current path.
* **Ctrl + Shift + F** / **Cmd + Shift + F** (in Thunar) will open Catfish in the current path.

## Packageset Updates

The following components were newly added to Xubuntu 19.04 with a team vote:

* AptURL ([More Information](https://help.ubuntu.com/community/AptURL) | [Voting Results](https://lists.ubuntu.com/archives/xubuntu-devel/2018-December/011756.html))
* GIMP ([More Information](https://www.gimp.org/) | [Voting Results](https://lists.ubuntu.com/archives/xubuntu-devel/2018-November/011721.html))
* LibreOffice Impress (and Draw) ([More Information](https://www.libreoffice.org/discover/impress/) | [Voting Results](https://lists.ubuntu.com/archives/xubuntu-devel/2018-November/011721.html))

Additionally, Orage was removed ([Voting Results](https://lists.ubuntu.com/archives/xubuntu-devel/2018-November/011721.html)) from our standard installation.

### Applications
* [Catfish 1.4.7](https://bluesabre.org/2019/01/27/catfish-1-4-7-released/)
* [Gigolo 0.4.91](https://mail.xfce.org/pipermail/xfce-announce/2019-February/000671.html) *(New GTK+ 3 release!)*
* [Mugshot 0.4.1](https://bluesabre.org/2018/08/08/mugshot-0-4-1-released/)
* [Parole Media Player 1.0.2](https://bluesabre.org/2019/04/04/parole-media-player-1-0-2-released/)
* [Ristretto 0.8.4](https://mail.xfce.org/pipermail/xfce-announce/2019-April/000680.html)
* [Thunar 1.8.4](https://mail.xfce.org/pipermail/xfce-announce/2019-January/000668.html)
* [Thunar Volume Manager 0.9.1](https://mail.xfce.org/pipermail/xfce-announce/2018-November/000652.html) *(New GTK+ 3 release!)*
* [Xfce Application Finder 4.13.2](https://mail.xfce.org/pipermail/xfce-announce/2018-December/000655.html) *(New GTK+ 3 release!)*
* [Xfce Desktop 4.13.3](https://mail.xfce.org/pipermail/xfce-announce/2019-March/000673.html)
* [Xfce Dictionary 0.8.2](https://mail.xfce.org/pipermail/xfce-announce/2018-November/000653.html)
* [Xfce Notifications 0.4.3](https://mail.xfce.org/pipermail/xfce-announce/2018-October/000647.html)
* [Xfce Panel 4.13.4](https://mail.xfce.org/pipermail/xfce-announce/2019-January/000659.html)
* [Xfce Screenshooter 1.9.5](https://mail.xfce.org/pipermail/xfce-announce/2019-March/000678.html)
* [Xfce Task Manager 1.2.2](https://mail.xfce.org/pipermail/xfce-announce/2018-December/000658.html)

### Libraries
* [Exo 0.12.4](https://bluesabre.org/2019/01/19/exo-0-12-4-released/)

### Panel Plugins
* [Xfce System Load Plugin 1.2.2](https://mail.xfce.org/pipermail/xfce-announce/2018-November/000654.html)
* [Xfce Weather Plugin 0.9.1](https://mail.xfce.org/pipermail/xfce-announce/2019-March/000675.html) *(New GTK+ 3 release!)*
* [Xfce Whisker Menu Plugin 2.3.1](https://mail.xfce.org/pipermail/xfce-announce/2019-January/000663.html)

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/disco/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/disco/+source/atril/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/disco/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/disco/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/disco/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/disco/+source/gimp/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/disco/+source/gtk2-engines-xfce/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/disco/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/disco/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/disco/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/disco/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/disco/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/disco/+source/pavucontrol/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/disco/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/disco/+source/shimmer-themes/+changelog))
* xfpanel-switch  ([changelog](https://launchpad.net/ubuntu/disco/+source/xfpanel-switch/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/disco/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/disco/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/disco/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/disco/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/disco/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/disco/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/disco/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-panel/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/disco/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/disco/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/disco/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/disco/+source/catfish/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/disco/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/disco/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/disco/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/disco/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-notifyd/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/disco/+source/thunar-media-tags-plugin/+changelog))
