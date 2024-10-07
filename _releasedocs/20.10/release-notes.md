---
layout:    page
release:   "20.10"
link_name: "Release Notes"
title:     "Xubuntu 20.10 Release Notes"
---

**Welcome to the Xubuntu 20.10 "Groovy Gorilla" release notes!**

Xubuntu 20.10 was released on Thursday, October 22, 2020 and will be supported for nine months until Thursday, July 22, 2021. For general information and the latest updates for Xubuntu 20.10, check out the [release page](https://xubuntu.org/release/20-10) on xubuntu.org.

* [Known Issues](#known_issues)
* [Ubuntu Common Release Notes](#ubuntu_common_release_notes)
* [Major Updates](#major_updates)
* [Removals](#removals)
* [Updates](#updates)
* [Changelogs](#changelogs)

## Known Issues

### Installer Issues

* grub-installer chooses which drive to install to with no user input ([964331](https://bugs.launchpad.net/ubuntu/+source/grub-installer/+bug/964331))

### Graphical Issues

* AMD Graphics: Block staircase display with side-by-side monitors of different pixel widths ([1873895](https://bugs.launchpad.net/ubuntu/+source/xserver-xorg-video-amdgpu/+bug/1873895), [Fixed upstream](https://gitlab.freedesktop.org/daenzer/xf86-video-amdgpu/-/commit/0732f81a2c67354ddfa7a495bee6b0997c6ef244), SRU expected for 20.04.1)

### General Issues

* GNOME Font Viewer: Crashes in the live environment ([1845362](https://bugs.launchpad.net/ubuntu/+source/gnome-font-viewer/+bug/1845362))
* Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple Pulseaudio plugins added to panel ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
* Xfce Screensaver: Password required twice when switching users ([1874178](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1874178))
* Xfce Settings Daemon: Sometimes does not run after logging in, resulting in appearance and configuration issues ([1870641](https://bugs.launchpad.net/ubuntu/+source/xfce4-settings/+bug/1870641))

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://wiki.ubuntu.com/GroovyGorilla/ReleaseNotes) covers both many of the other packages we carry and more issues common to every Ubuntu flavor.

## Major Updates

This was a less active development cycle for our team, though we did make some significant improvements for our contributors.

### Code Contributions

We've moved all of our code hosting to GitHub to make it easier for new and existing contributors to join into the Xubuntu development process. Artwork, documentation, marketing, websites, and everything else can now be found on the [Xubuntu GitHub](https://github.com/xubuntu)!

### Translations

The second piece of the code migration was managing our translations. Easier than ever, our translations can now be found in a single place, on [Transifex](https://www.transifex.com/xubuntu/public/)!

### Documentation

With a small team of new contributors, we worked on revamping our documentation this cycle. Every chapter received a number of updates and improvements, all of which can currently be found on [Google Drive](https://drive.google.com/drive/folders/10nsLPokttFjG9g4x4mLBYNkTyO0izy5H). We [started migrating](https://github.com/Xubuntu/xubuntu-docs/tree/docs-refresh) it to Docbook, but didn't finish due to technical complications and time constraints. If you're a Docbook expert, we'd love the help!

## Removals

### LibreOffice Tango Theme

Users of the LibreOffice Tango theme will find that it is no longer included in Xubuntu. However, it is still available to install from the repositories. Install in Xubuntu:

    sudo apt install libreoffice-style-tango

## Updates

_Significant package and version updates. For full package changelogs, see the Changelogs section below._

### Application Stack

* GTK / GNOME 3.38
* MATE 1.24
* Xfce 4.14

### Themes

* Greybird 3.22.12
* Numix: 2.6.7
* elementary-xfce 0.15.1

### Applications

#### Xfce

* Catfish 1.4.13
* Gigolo 0.5.1
* Parole Media Player 1.0.5
* Thunar File Manager 1.8.15
* Xfburn 0.6.2
* Xfce Desktop 4.14.2
* Xfce Dictionary 0.8.3
* Xfce Panel 4.14.4
* Xfce Panel Profiles 1.0.10
* Xfce Power Manager 1.6.6
* Xfce PulseAudio Plugin 0.4.3
* Xfce Screensaver 1.9.7
* Xfce Settings 4.14.3
* Xfce StatusNotifier Plugin 0.2.2
* Xfce Task Manager 1.2.3
* Xfce Terminal 0.8.9.2
* Xfce Weather Plugin 0.10.1
* Xfce Whisker Menu Plugin 2.4.6
* Xfce Window Manager 4.14.5

#### MATE

* Atril 1.24.0
* Engrampa 1.24.1
* MATE Calculator 1.24.1

#### GNOME

* GNOME Mines 3.36.1
* GNOME Software 3.38.0
* GNOME Sudoku 3.38.0
* Simple Scan 3.36.4

#### Everything Else

* Blueman 2.1.3
* Firefox 81.0.2
* GIMP 2.10.18
* LibreOffice 7.0.2
* PulseAudio Volume Control 4.0
* SGT Puzzles 20191231.79a5378-3 (and Launcher 0.2.5)
* Thunderbird 78.3.2

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/groovy/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/groovy/+source/atril/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/groovy/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/groovy/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/groovy/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/groovy/+source/gimp/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/groovy/+source/gtk2-engines-xfce/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/groovy/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/groovy/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/groovy/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/groovy/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/groovy/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/groovy/+source/pavucontrol/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/groovy/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/groovy/+source/shimmer-themes/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/groovy/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/groovy/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/groovy/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/groovy/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/groovy/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/groovy/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/groovy/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-panel/+changelog))
* xfce4-panel-profiles  ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-panel-profiles/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/groovy/+source/catfish/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/groovy/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/groovy/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/groovy/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-notifyd/+changelog))
* xfce4-screensaver ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-screensaver/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/groovy/+source/thunar-media-tags-plugin/+changelog))
