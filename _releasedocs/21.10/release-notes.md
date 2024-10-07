---
layout:    page
release:   "21.10"
link_name: "Release Notes"
title:     "Xubuntu 21.10 Release Notes"
date:      2021-10-14 12:00:00
---

**Welcome to the Xubuntu 21.10 "Impish Indri" release notes!**

Xubuntu 21.10 was released on Thursday, October 14, 2021 and will be supported for nine months until Thursday, June 14, 2022. For general information and the latest updates for Xubuntu 21.10, check out the [release page](https://xubuntu.org/release/21-10) on xubuntu.org.

* [Known Issues](#known_issues)
* [Ubuntu Common Release Notes](#ubuntu_common_release_notes)
* [Major Updates](#major_updates)
* [UX Updates](#ux_updates)
* [Updates](#updates)
* [Changelogs](#changelogs)

## Known Issues

### Installer Issues

* grub-installer chooses which drive to install to with no user input ([964331](https://bugs.launchpad.net/ubuntu/+source/grub-installer/+bug/964331))
* OEM installation uses the wrong slideshow ([1842047](https://bugs.launchpad.net/ubuntu/+source/ubiquity-slideshow-ubuntu/+bug/1842047))
* No shutdown prompt after installation ([1942987](https://bugs.launchpad.net/ubuntu/+source/plymouth/+bug/1942987), [1944519](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1944519))
  * However, you should be able to press the Enter key to continue with the reboot.

### General Issues

* Boot: Decryption password prompt not visible ([1917062](https://bugs.launchpad.net/xubuntu-artwork/+bug/1917062))
* GNOME Font Viewer: Crashes in the live environment ([1845362](https://bugs.launchpad.net/ubuntu/+source/gnome-font-viewer/+bug/1845362))
* Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple Pulseaudio plugins added to panel ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
* Xfce Screensaver: Password required twice when switching users ([1874178](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1874178))

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](#) covers both many of the other packages we carry and more issues common to every Ubuntu flavor.

## Major Updates

* **GNOME Disk Analyzer** (baobab) and **Disk Utility** have been added to Xubuntu to make it easier to monitor and manage your partitions.
* **Rhythmbox** with the **Alternative Toolbar** layout are now included in Xubuntu. Play your music with a dedicated media library.
* **Pipewire** is now included in Xubuntu and other flavors. Pipewire is used in conjunction with PulseAudio to improve audio playback in Linux. Bluetooth audio is especially improved.
* **Pidgin** has been removed due to decreasing functionality as various messaging platforms move to proprietary protocols and applications. Pidgin can be reinstalled from GNOME Software if you still rely on it.

## UX Updates

### Keyboard Shortcuts

For a full list of keyboard shortcuts, [click here](https://wiki.xubuntu.org/releases/21.10/keyboard-shortcuts).

* The long-obsoleted Super+{1,2,3,4} shortcuts have been removed
* The Super (Windows) key will now show the Whisker Menu
* The Music specialty key will now launch Rhythmbox instead of Parole

### Thunar

* The Thunar titlebar will now display the full directory path

## Updates

_Significant package and version updates. For full package changelogs, see the [Changelogs](#Changelogs) section below._

### Application Stack

* GNOME 40
* GTK 3.24.30
* MATE 1.26
* Xfce 4.16

### Themes

* Greybird 3.22.15

### Applications

#### Xfce

* Catfish 4.16.2
* Exo 4.16.2
* Gigolo 0.5.2
* Mousepad 0.5.4
* Ristretto 0.11.0
* Thunar File Manager 4.16.8
* Xfce Clipman Plugin 1.6.2
* Xfce Netload Plugin 1.4.0
* Xfce Panel 4.16.3
* Xfce Screenshooter 1.9.9
* Xfce Settings 4.16.2
* Xfce Systemload Plugin 1.3.1
* Xfce Task Manager 1.5.2
* Xfce Whisker Menu Plugin 2.6.0

#### MATE

* Atril 1.26.0
* Engrampa 1.26.0
* MATE Calculator 1.26.0

#### GNOME

* GNOME Disk Usage Analyzer 41
* GNOME Disk Utility 41
* GNOME Mines 40.0
* GNOME Software 40.4
* GNOME Sudoku 40.2
* Rhythmbox 3.4.4
* Simple Scan 40.5

#### Everything Else

* Blueman 2.2.2
* Firefox 93.0
* GIMP 2.10.24
* LibreOffice 7.2.1
* Pipewire 0.3.32
* PulseAudio 15.0
* Snapd 2.53
* SGT Launcher 0.2.7
* Thunderbird 91.1.2

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/impish/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/impish/+source/atril/+changelog))
* baobab ([changelog](https://launchpad.net/ubuntu/impish/+source/baobab/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/impish/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/impish/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/impish/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/impish/+source/gimp/+changelog))
* gnome-disk-utility ([changelog](https://launchpad.net/ubuntu/impish/+source/gnome-disk-utility/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/impish/+source/gtk2-engines-xfce/+changelog))
* hexchat ([changelog](https://launchpad.net/ubuntu/impish/+source/hexchat/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/impish/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/impish/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/impish/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/impish/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/impish/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/impish/+source/pavucontrol/+changelog))
* rhythmbox ([changelog](https://launchpad.net/ubuntu/impish/+source/rhythmbox/+changelog))
* pipewire ([changelog](https://launchpad.net/ubuntu/impish/+source/pipewire/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/impish/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/impish/+source/shimmer-themes/+changelog))
* synaptic ([changelog](https://launchpad.net/ubuntu/impish/+source/synaptic/+changelog))
* xcape ([changelog](https://launchpad.net/ubuntu/impish/+source/xcape/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/impish/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/impish/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/impish/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/impish/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/impish/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/impish/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/impish/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-panel/+changelog))
* xfce4-panel-profiles  ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-panel-profiles/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/impish/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/impish/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/impish/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/impish/+source/catfish/+changelog))
* gigolo ([changelog](https://launchpad.net/ubuntu/impish/+source/gigolo/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/impish/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/impish/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/impish/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/impish/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-notifyd/+changelog))
* xfce4-screensaver ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-screensaver/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-clipman-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-clipman-plugin/+changelog))
* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/impish/+source/thunar-media-tags-plugin/+changelog))
