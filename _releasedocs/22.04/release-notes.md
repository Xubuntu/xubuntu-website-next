---
layout:    page
release:   "22.04"
link_name: "Release Notes"
title:     "Xubuntu 22.04 Release Notes"
---

**Welcome to the Xubuntu 22.04 "Jammy Jellyfish" release notes!**

Xubuntu 22.04 will be released on Thursday, April 21, 2022, and will be supported for three years until April 2025. For general information and the latest updates for Xubuntu 22.04, check out the [release page](https://xubuntu.org/release/22-04) on xubuntu.org.

* [Known Issues](#known_issues)
* [Ubuntu Common Release Notes](#ubuntu_common_release_notes)
* [Major Updates](#major_updates)
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
* Help: The Firefox Snap does not currently open the locally-installed Xubuntu Docs ([1967109](https://bugs.launchpad.net/ubuntu/+source/firefox/+bug/1967109))

### UEFI and BIOS Dual Boot

Other operating systems are not displayed in the boot menu anymore unless Xubuntu has been installed alongside another operating system. Once all other operating systems are removed from the machine, detection of other operating systems is disabled, and to re-enable it after installing another OS, you will have to delete `/boot/grub/grub.cfg` and immediately run `update-grub` again. More information on the [ubuntu-devel](https://lists.ubuntu.com/archives/ubuntu-devel/2021-December/041769.html) mailing list.

### PKCS#11 Smartcard Support

Users that need PKCS#11 smartcard support in Firefox should not upgrade to 22.04 until PKCS#11 support is added to the Firefox snap ([1967632](https://bugs.launchpad.net/ubuntu/+source/firefox/+bug/1967632))

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://discourse.ubuntu.com/t/jammy-jellyfish-release-notes/24668) covers both many of the other packages we carry and more issues common to every Ubuntu flavor.

## Major Updates

* **Mousepad 0.5.8**, our text editor, broadens its feature set with the addition of session backup and restore, plugin support, and a new gspell plugin.
* **Ristretto 0.12.2**, the versatile image viewer, improves thumbnail support and features numerous performance improvements.
* **Whisker Menu Plugin 2.7.1** expands customization options with several new preferences and CSS classes for theme developers.
* Refreshed [user documentation](https://xubuntu.github.io/xubuntu-docs/user/C/index.html), available on the ISO and online.

### Firefox Snap

Following Ubuntu, **Firefox** is now our first included Snap package. Most users won't notice a difference, save for potentially slow startup times the first time you open Firefox. Benefits Ubuntu lists include:
* Directly maintained by Mozilla
* More maintainable for the entire Ubuntu LTS lifecycle
* Faster access to the newest Firefox versions
* Easily switch to a different Firefox flavor with snap channels including `esr/stable`, `latest/candidate`, `latest/beta`, and `latest/edge`
* Sandboxed for improved security hardening for this critical app

### For Xubuntu 20.04 Users

If you're coming from Xubuntu 20.04, you may also want to review the 20.10, 21.04, and 21.10 release notes to catch up on all of the latest updates.

* [Xubuntu 20.10 "Groovy Gorilla"](/releases/20.10/release-notes)
* [Xubuntu 21.04 "Hirsute Hippo"](/releases/21.04/release-notes)
* [Xubuntu 21.10 "Impish Indri"](/releases/21.10/release-notes)

## Appearance Updates

### Theme Updates

* **Greybird 3.23.1** introduces initial support for GTK 4 and libhandy, making GNOME and modern GTK applications feel at home in Xubuntu. It also brings back the Accessibility and Compact window manager themes.
* **elementary-xfce 0.16** adds many new icons and refreshes several others for a cleaner and more consistent Xubuntu desktop experience.

### Community Wallpaper Contest Winners

[<img src="xubuntu-wallpaper-contest-winners.png" width="400" />](xubuntu-wallpaper-contest-winners.png)

Six winners were selected from a pool of over 100 submissions for the 22.04 Community Wallpaper Contest. From left to right, top to bottom:

* ["Kanchanjunga Peaks" by Pushkar Deshpande (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Kanchanjunga_Peaks_by_Pushkar_Deshpande.jpg)
* ["Journey home" by Juliette Taka (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Journey_home_by_Juliette_Taka.png)
* ["Field" by Tibor Mokánszki (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Field_by_Tibor_Mokanszki.jpg)
* [Untitled by Dagat (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Untitled_by_Dagat.jpg)
* ["Dolomites" by Felix Hartlieb (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Dolomites_by_Felix_Hartlieb.jpg)
* [Untitled by Mathias Hüber (CC-BY-4.0)](https://github.com/Xubuntu/xubuntu-community-artwork/blob/master/usr/share/xfce4/backdrops/Untitled_by_Mathias_Huber.jpg)

## Updates

_Significant package and version updates. For full package changelogs, see the [Changelogs](#Changelogs) section below._

### Application Stack

* GNOME 42
* GTK 3.24.33
* MATE 1.26
* Xfce 4.16

### Subsystems

* BlueZ 5.64
* CUPS 2.4
* NetworkManager 1.36
* Mesa 22
* Poppler 22.02
* PulseAudio 16
* xdg-desktop-portal 1.14

### Themes

* elementary-xfce 0.16
* Greybird 3.23.1

### Applications

#### Xfce

* Catfish 4.16.3
* Exo 4.16.3
* Gigolo 0.5.2
* Mousepad 0.5.8
* Ristretto 0.12.2
* Thunar File Manager 4.16.10
* Xfce Clipman Plugin 1.6.2
* Xfce Netload Plugin 1.4.0
* Xfce Panel 4.16.3
* Xfce Screenshooter 1.9.9
* Xfce Settings 4.16.2
* Xfce Systemload Plugin 1.3.1
* Xfce Task Manager 1.5.2
* Xfce Whisker Menu Plugin 2.7.1

#### MATE

* Atril 1.26.0
* Engrampa 1.26.0
* MATE Calculator 1.26.0

#### GNOME

* GNOME Disk Usage Analyzer 41.0
* GNOME Disk Utility 42.0
* GNOME Mines 40.1
* GNOME Software 41.5
* GNOME Sudoku 42.0
* Rhythmbox 3.4.4
* Simple Scan 42.0

#### Everything Else

* Blueman 2.2.4
* Firefox 99.0.1 (snap)
* GIMP 2.10.30
* LibreOffice 7.3.2
* Pipewire 0.3.48
* Snapd 2.55.3
* SGT Launcher 0.2.7
* Thunderbird 91.8.0

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/jammy/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/jammy/+source/atril/+changelog))
* baobab ([changelog](https://launchpad.net/ubuntu/jammy/+source/baobab/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/jammy/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/jammy/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/jammy/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/jammy/+source/gimp/+changelog))
* gnome-disk-utility ([changelog](https://launchpad.net/ubuntu/jammy/+source/gnome-disk-utility/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/jammy/+source/gtk2-engines-xfce/+changelog))
* hexchat ([changelog](https://launchpad.net/ubuntu/jammy/+source/hexchat/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/jammy/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/jammy/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/jammy/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/jammy/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/jammy/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/jammy/+source/pavucontrol/+changelog))
* rhythmbox ([changelog](https://launchpad.net/ubuntu/jammy/+source/rhythmbox/+changelog))
* pipewire ([changelog](https://launchpad.net/ubuntu/jammy/+source/pipewire/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/jammy/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/jammy/+source/shimmer-themes/+changelog))
* synaptic ([changelog](https://launchpad.net/ubuntu/jammy/+source/synaptic/+changelog))
* xcape ([changelog](https://launchpad.net/ubuntu/jammy/+source/xcape/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/jammy/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/jammy/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/jammy/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/jammy/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/jammy/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/jammy/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/jammy/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-panel/+changelog))
* xfce4-panel-profiles  ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-panel-profiles/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/jammy/+source/catfish/+changelog))
* gigolo ([changelog](https://launchpad.net/ubuntu/jammy/+source/gigolo/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/jammy/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/jammy/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/jammy/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-notifyd/+changelog))
* xfce4-screensaver ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-screensaver/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-clipman-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-clipman-plugin/+changelog))
* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/jammy/+source/thunar-media-tags-plugin/+changelog))
