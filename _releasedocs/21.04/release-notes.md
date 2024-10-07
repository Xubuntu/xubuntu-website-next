---
layout:    page
release:   "21.04"
link_name: "Release Notes"
title:     "Xubuntu 21.04 Release Notes"
date:      2021-04-22 12:00:00
---

**Welcome to the Xubuntu 21.04 "Hirsute Hippo" release notes!**

Xubuntu 21.04 was released on Thursday, April 22, 2021 and will be supported for nine months until Thursday, January 22, 2022. For general information and the latest updates for Xubuntu 21.04, check out the [release page](https://xubuntu.org/release/21-04) on xubuntu.org.

[<img src="xubuntu-21.04.png" width="400" />](xubuntu-21.04.png)

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

### General Issues

* Boot: Decryption password prompt not visible ([1917062](https://bugs.launchpad.net/xubuntu-artwork/+bug/1917062))
* GNOME Font Viewer: Crashes in the live environment ([1845362](https://bugs.launchpad.net/ubuntu/+source/gnome-font-viewer/+bug/1845362))
* Xfce Pulseaudio Plugin: Multiple notifications displayed if multiple Pulseaudio plugins added to panel ([1769775](https://bugs.launchpad.net/ubuntu/+source/xfce4-pulseaudio-plugin/+bug/1769775))
* Xfce Screensaver: Password required twice when switching users ([1874178](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1874178))

## Ubuntu Common Release Notes

The main Ubuntu [Release Notes](https://discourse.ubuntu.com/t/hirsute-hippo-release-notes/19221) covers both many of the other packages we carry and more issues common to every Ubuntu flavor.

## Major Updates

* **Xfce 4.16** features many improvements over the previous release, including:
  * A new **"StatusTray" panel plugin**, consolidating the StatusNotifier and System plugins into a single powerful and consistent plugin.
  * **Dark mode for the Xfce panel** to use a dark appearance without otherwise light themes.
  * Support for **fractional scaling** in the Display preferences.
  * **Queued file transfers**, **paused copy/move operations**, **per-directory view settings**, and more added to the Thunar file manager.
  * For more information about Xfce 4.16, check out the [release announcement](https://www.xfce.org/about/news/?post=1608595200), [changelog](https://www.xfce.org/download/changelogs/4.16/), and [tour](https://www.xfce.org/about/tour416).
* **Hexchat** and **Synaptic** are now included in Xubuntu 21.04.
  * **[HexChat](https://hexchat.github.io/)** is an highly-configurable open source IRC client and is recommended over Pidgin for IRC communication. In Xubuntu, it's preconfigured to connect to the #xubuntu channel on Freenode.
  * **[Synaptic](https://www.nongnu.org/synaptic/)** is an advanced package manager for apt. It joins GNOME Software on Xubuntu and can be safely used alongside it.
* **[Ayatana Indicators](https://ayatanaindicators.github.io/)** are now used with LightDM GTK+ Greeter and the Xfce Indicator plugin. This change may affect your indicator usage, as not all existing Application Indicators have been ported.
* The full **Adwaita icon theme** is now included. Previously, we shipped a partial version of this icon theme as required by GTK 3. Using the partial version was a sub-par experience, so we've brought in the full version!
* Xubuntu 21.04 now includes a **"Minimal" install option** on the main ISO. This installation option is similar to the [Xubuntu Core](https://unit193.net/xubuntu/) installation image, and strips Xubuntu down to a might lighter base. To see the packages that are removed with the minimal install, check out our [seed file](https://github.com/Xubuntu/xubuntu-seed/blob/hirsute/desktop.minimal-remove).
* Xubuntu-specific **translations** are vastly improved, with numerous updates landing in our [installer slideshow](https://github.com/Xubuntu/ubiquity-slideshow-xubuntu), [default settings](https://github.com/Xubuntu/xubuntu-default-settings), and [documentation](https://github.com/Xubuntu/xubuntu-docs). Many thanks to our translation team on [Transifex](https://www.transifex.com/xubuntu/public/)!

## UX Updates

### Keyboard Shortcuts

Our keyboard shortcuts were updated to better align with Xfce 4.16 and other popular desktop environments. For a full list of keyboard shortcuts, [click here](https://wiki.xubuntu.org/releases/21.04/keyboard-shortcuts).

* **Ctrl+Alt+Delete**: Shows the Logout dialog
* **Ctrl+Shift+Escape**: Launches Task Manager
* **Super+R**: Launches the Application Finder
* **Super+E** or **Ctrl+Alt+F**: Launches the File Manager

### Desktop

* The File System and removable device icons are no longer displayed on the desktop
* The applications menu has been removed from the desktop right-click menu

### Menu

* The Texinfo launcher has been removed from the menu
* The PulseAudio Volume Control launcher has been removed from the menu and replaced with a "Sound" option in the Settings Manager

### Panel

* The StatusNotifier and Systray plugins have been merged and replaced with the StatusTray plugin
* The separator between the clock and tray icons was replaced with padding on both sides, removing the unclickable space between the plugins and giving the clock some breathing room
* The PulseAudio plugin is now configured with window focus support, improving integration with third-party music players

### Thunar

* The path bar is now used by default, making it easier to navigate up paths
* Folders can now be opened in a new tab by middle-clicking them
* Special folders (such as Home) will no longer change the window icon, adding consistency to the panel

## Updates

_Significant package and version updates. For full package changelogs, see the [Changelogs](#Changelogs) section below._

### Application Stack

* GTK / GNOME 3.38
* MATE 1.24
* Xfce 4.16

### Themes

* Greybird 3.22.14
* Numix: 2.6.7
* elementary-xfce 0.15.2

### Applications

#### Xfce

* Catfish 4.16.0
* Gigolo 0.5.1
* Parole Media Player 4.16.0
* Thunar File Manager 4.16.6
* Xfburn 0.6.2
* Xfce Desktop 4.16.0
* Xfce Dictionary 0.8.4
* Xfce Panel 4.16.2
* Xfce Panel Profiles 1.0.13
* Xfce Power Manager 4.16.0
* Xfce PulseAudio Plugin 0.4.3
* Xfce Screensaver 4.16.0
* Xfce Settings 4.16.0
* Xfce Task Manager 1.4.0
* Xfce Terminal 0.8.10
* Xfce Weather Plugin 0.11.0
* Xfce Whisker Menu Plugin 2.5.3
* Xfce Window Manager 4.16.1

#### MATE

* Atril 1.24.1
* Engrampa 1.24.2
* MATE Calculator 1.24.2

#### GNOME

* GNOME Mines 3.36.1
* GNOME Software 3.38.0
* GNOME Sudoku 40.0
* Simple Scan 3.38.1

#### Everything Else

* Blueman 2.1.4
* Firefox 87.0
* GIMP 2.10.22
* Hexchat 2.14.3
* LibreOffice 7.1.2
* PulseAudio Volume Control 4.0
* SGT Puzzles 20191231.79a5378-3 (and Launcher 0.2.5)
* Synaptic 0.90.2
* Thunderbird 78.8.1

## Changelogs

### Xubuntu/Other Packages

* apturl ([changelog](https://launchpad.net/ubuntu/hirsute/+source/apturl/+changelog))
* atril ([changelog](https://launchpad.net/ubuntu/hirsute/+source/atril/+changelog))
* blueman ([changelog](https://launchpad.net/ubuntu/hirsute/+source/blueman/+changelog))
* elementary-xfce ([changelog](https://launchpad.net/ubuntu/hirsute/+source/elementary-xfce/+changelog))
* engrampa ([changelog](https://launchpad.net/ubuntu/hirsute/+source/engrampa/+changelog))
* gimp ([changelog](https://launchpad.net/ubuntu/hirsute/+source/gimp/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/hirsute/+source/gtk2-engines-xfce/+changelog))
* hexchat ([changelog](https://launchpad.net/ubuntu/hirsute/+source/hexchat/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/hirsute/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/hirsute/+source/lightdm-gtk-greeter-settings/+changelog))
* mate-calc ([changelog](https://launchpad.net/ubuntu/hirsute/+source/mate-calc/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/hirsute/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/hirsute/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/hirsute/+source/pavucontrol/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/hirsute/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/hirsute/+source/shimmer-themes/+changelog))
* synaptic ([changelog](https://launchpad.net/ubuntu/hirsute/+source/synaptic/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-docs/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/hirsute/+source/exo/+changelog))
* libxfce4ui ([changelog](https://launchpad.net/ubuntu/hirsute/+source/libxfce4ui/+changelog))
* libxfce4util ([changelog](https://launchpad.net/ubuntu/hirsute/+source/libxfce4util/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/hirsute/+source/thunar/+changelog))
* thunar-volman ([changelog](https://launchpad.net/ubuntu/hirsute/+source/thunar-volman/+changelog))
* tumbler ([changelog](https://launchpad.net/ubuntu/hirsute/+source/tumbler/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-panel/+changelog))
* xfce4-panel-profiles  ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-panel-profiles/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/hirsute/+source/catfish/+changelog))
* gigolo ([changelog](https://launchpad.net/ubuntu/hirsute/+source/gigolo/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/hirsute/+source/mousepad/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/hirsute/+source/parole/+changelog))
* ristretto ([changelog](https://launchpad.net/ubuntu/hirsute/+source/ristretto/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-notifyd/+changelog))
* xfce4-screensaver ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-screensaver/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/xfce4-xkb-plugin/+changelog))

### Thunar Plugins

* thunar-archive-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/thunar-archive-plugin/+changelog))
* thunar-media-tags-plugin ([changelog](https://launchpad.net/ubuntu/hirsute/+source/thunar-media-tags-plugin/+changelog))
