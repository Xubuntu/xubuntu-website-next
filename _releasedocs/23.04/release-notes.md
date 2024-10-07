---
layout:    page
release:   "23.04"
link_name: "Release Notes"
title:     "Xubuntu 23.04 Release Notes"
---

**Welcome to the Xubuntu 23.04 "Lunar Lobster" release notes!**

Xubuntu 23.04 was be released on Thursday, April 20, 2023, and will be supported for nine months until January 2023. For general information and the latest updates for Xubuntu 23.04, check out the [release page](https://xubuntu.org/release/23-04) on xubuntu.org.

* [Known Issues](#known_issues)
* [Ubuntu Common Release Notes](#ubuntu_common_release_notes)
* [Major Updates](#major_updates)
* [Updates](#updates)
* [Changelogs](#changelogs)

## Known Issues

### Installer Issues

* No shutdown prompt after installation ([1944519](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1944519))
  * However, you should be able to press the Enter key to continue with the reboot.
* Xubuntu installer on desktop is "untrusted" ([1987958](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1987958))
  * The launcher can be run from the menu or you can click "Launch anyway".
* OEM installation fails on Xubuntu Minimal ([2013251](https://launchpad.net/bugs/2013251))
* OEM installation uses the wrong slideshow ([1842047](https://bugs.launchpad.net/ubuntu/+source/ubiquity-slideshow-ubuntu/+bug/1842047))
* Installer crashes when quitting in the live session ([2016009](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/2016009))

### General Issues

* Xfce Screensaver crashes shortly after unlocking ([2012795](https://bugs.launchpad.net/ubuntu/+source/xfce4-screensaver/+bug/2012795))
  * This crash seems to affect the unlock dialog process after unlocking. The screensaver daemon is still running and locking/unlocking still works after the crash.
* Xorg crashes after logging in or switching users on some Virtual Machines ([1861609](https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/1861609))
* Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple Pulseaudio plugins added to panel ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
* Xfce Screensaver: Password required twice when switching users ([1874178](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1874178))

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://discourse.ubuntu.com/t/lunar-lobster-release-notes/31910) covers both many of the other packages we carry and more issues common to every Ubuntu flavor.

## Major Updates

* **Xubuntu Minimal** is now available, featuring a slimmed down version of Xubuntu with only the bare essentials.
* **Xfce 4.18**, the latest major release, is included in Xubuntu 23.04. For a summary of the updates, consider reading:
  * [Xfce 4.18 Tour](https://xfce.org/about/tour418) (xfce.org), or
  * [Xfce 4.18 is Out - Here are the best new features](https://www.omgubuntu.co.uk/2022/11/xfce-4-18-features-and-changes) (omgubuntu.co.uk)
* **Pipewire** (and wireplumber) are now included in Xubuntu.

## Appearance Updates

### General

* Panel: The systray plugin now uses "automatic" icon sizes, making indicators and tray icons more consistent.
* Terminal: The font size was increased from 9 to 10.

## Updates

_Significant package and version updates. For full package changelogs, see the [Changelogs](#Changelogs) section below._

### Application Stack

* GNOME 44
* GTK 2.24.33 / 3.24.37 / 4.10.1
* MATE 1.26
* Xfce 4.18

### Subsystems

* BlueZ 5.66
* CUPS 2.4.2
* NetworkManager 1.42.4
* Mesa 23.0.2
* Poppler 22.12.0
* PulseAudio 16.1
* xdg-desktop-portal 1.16.0

### Themes

* elementary-xfce 0.17
* Greybird 3.23.2

### Applications

#### Xfce

* Catfish 4.16.4
* Exo 4.18.0
* Gigolo 0.5.2
* Mousepad 0.5.10
* Ristretto 0.12.4
* Thunar File Manager 4.18.4
* Xfce Application Finder 4.18.0
* Xfce Clipman Plugin 1.6.2
* Xfce Netload Plugin 1.4.0
* Xfce Panel 4.18.2
* Xfce PulseAudio Plugin 0.4.5
* Xfce Screenshooter 1.10.3
* Xfce Settings 4.18.2
* Xfce Systemload Plugin 1.3.2
* Xfce Task Manager 1.5.5
* Xfce Whisker Menu Plugin 2.7.2

#### MATE

* Atril 1.26.0
* Engrampa 1.26.0
* MATE Calculator 1.26.0

#### GNOME

* GNOME Disk Usage Analyzer 44.0
* GNOME Disk Utility 44.0
* GNOME Mines 40.1
* GNOME Software 44.0
* GNOME Sudoku 44.0
* Rhythmbox 3.4.6
* Simple Scan 44.0

#### Everything Else

* Blueman 2.3.5
* Firefox 111.0.1 (snap)
* GIMP 2.10.34
* LibreOffice 7.5.2
* Pipewire 0.3.65
* Snapd 2.59.1
* SGT Launcher 0.2.8
* Thunderbird 102.10.0

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/lunar/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/lunar/+source/atril/+changelog))
* baobab ([changelog](https://launchpad.net/ubuntu/lunar/+source/baobab/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/lunar/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/lunar/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/lunar/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/lunar/+source/gimp/+changelog))
* gnome-disk-utility ([changelog](https://launchpad.net/ubuntu/lunar/+source/gnome-disk-utility/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/lunar/+source/gtk2-engines-xfce/+changelog))
* hexchat ([changelog](https://launchpad.net/ubuntu/lunar/+source/hexchat/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/lunar/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/lunar/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/lunar/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/lunar/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/lunar/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/lunar/+source/pavucontrol/+changelog))
* rhythmbox ([changelog](https://launchpad.net/ubuntu/lunar/+source/rhythmbox/+changelog))
* pipewire ([changelog](https://launchpad.net/ubuntu/lunar/+source/pipewire/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/lunar/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/lunar/+source/shimmer-themes/+changelog))
* synaptic ([changelog](https://launchpad.net/ubuntu/lunar/+source/synaptic/+changelog))
* xcape ([changelog](https://launchpad.net/ubuntu/lunar/+source/xcape/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/lunar/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/lunar/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/lunar/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/lunar/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/lunar/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/lunar/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/lunar/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-panel/+changelog))
* xfce4-panel-profiles  ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-panel-profiles/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/lunar/+source/catfish/+changelog))
* gigolo ([changelog](https://launchpad.net/ubuntu/lunar/+source/gigolo/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/lunar/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/lunar/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/lunar/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-notifyd/+changelog))
* xfce4-screensaver ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-screensaver/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-clipman-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-clipman-plugin/+changelog))
* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/lunar/+source/thunar-media-tags-plugin/+changelog))
