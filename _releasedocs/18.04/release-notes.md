---
layout:    page
release:   "18.04"
link_name: "Release Notes"
title:     "Xubuntu 18.04 Release Notes"
---

## Notable Issues

### Installer Issues

* **It must be noted that it is close to impossible for our small team of testers to be in a position to work through all the varying parameters available during installation. We do however aim to test all the possible methods of installation (including for OEM and using encryption) available either on a virtual machine or on hardware (where hardware has been used during testing then Xubuntu QA will where possible make that known on the iso testing tracker). Further installation testing information can be on the Ubuntu installation release note(s) listed below**

* Keyboard layout issues noted in Ubuntu or other flavours during installation:
  * Auto-selected keyboard layout no longer matches chosen region ([1706859](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1706859))
* "Force UEFI installation" dialog has non-working Go Back/Continue buttons ([1724482](https://bugs.launchpad.net/ubuntu/+source/ubiquity/+bug/1724482))
*  No restart after installation ([1723760](https://bugs.launchpad.net/ubuntu/+source/casper/+bug/1723760))

### General Issues
* At least one Nvidia driver causes issues when removed via Additional Drivers ([ 1761593](https://bugs.launchpad.net/ubuntu/+source/software-properties/+bug/1761593))
* Network indicators
  * Currently at times the panel could show 2 network icons, this appears to be a race condition which we have not been able to rectify in time for release.
* Parole Media Player: Play button inactive ([1705243](https://bugs.launchpad.net/parole/+bug/1705243))
* SGT Puzzles Collection: Menu bar grayed out ([1670610](https://launchpad.net/bugs/1670610))
* Xfce Indicator Plugin: Checkboxes for hidden/visible indicators not working properly ([1311685](https://bugs.launchpad.net/ubuntu/+source/xfce4-indicator-plugin/+bug/1311685))
* Applications Menu plugin clips panel icon ([1756608](https://bugs.launchpad.net/ubuntu/+source/xfce4-panel/+bug/1756608))
* Launch and Directory Menu items icons are too small ([1756612](https://bugs.launchpad.net/ubuntu/+source/xfce4-panel/+bug/1756612))
* No network from suspend resume (r8169 Ethernet Card) ([1752772](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1752772))
* Double login required from suspend ([1760078](https://bugs.launchpad.net/ubuntu/+source/lightdm/+bug/1760078))
* Wrong resolution at unlock screen (Nvidia) ([1760068](https://bugs.launchpad.net/ubuntu/+source/light-locker/+bug/1760068))

#### Ubuntu Generic Release Note

The main Ubuntu release [note](https://wiki.ubuntu.com/BionicBeaver/ReleaseNotes) covers both many of the other packages we carry and more generic issues.

## Major Updates

### Appearance

This release, we decided to remove the GTK Theme Configuration tool. It is no longer possible to override colors in all themes with a single application due to recent developments in GTK. It may return in a later release, but with limited functionality or theme support.

The Greybird GTK theme has been updated to version 3.22.8. This feature release includes improved HiDPI support, Chrome/ium GTK 3 styles, a new dark theme, smaller switches, and improved scales, and greater consistency between GTK 2 and GTK 3 applications.

### Panel Plugins

#### PulseAudio Plugin

With Xubuntu 18.04, we replaced the Sound Indicator with the Xfce PulseAudio Plugin. Some key features include:

* Select, move, and control audio output and input from the plugin menu
* Middle click the icon to quickly mute and unmute
* Control playback of media players
* Increase volume levels beyond 100%
* Enable universal multimedia key control for any media player with MPRIS2 support
* Swap between playlists in supported applications

#### Status Notifier Plugin

This new plugin replaces the Application Indicator with a more configurable and better supported option. It supports indicators provided by indicator-application as well as the FreeDesktop.org StatusNotifierItem specification. Configuration options include:

* Configurable icon size
* Square icons – all items will be at least as wide as they are tall
* Symbolic icons – Application indicators will be displayed with a symbolic icon if it is available
* Hide or show individual application indicators

#### Notification Plugin

We've included the new xfce4-notifyd panel plugin in Xubuntu 18.04. This plugin makes it easy to toggle "Do Not Disturb" mode and view missed notifications.

### Desktop Applications

Xfce is a very modular desktop environment, and for a long time we have shipped several GNOME components to fill our productivity software needs. In Bionic, we have decided to swap out a few pieces of GNOME with corresponding bits from MATE. MATE (formerly GNOME 2) shares several design elements with Xfce, making these components feel at home on the Xubuntu desktop. The features of these components are almost identical, so you won't miss out on anything.

* Document Viewer: Evince → Atril
* Archive Manager: File Roller → Engrampa
* Calculator: GNOME Calculator → MATE Calculator

#### Utilities

##### Catfish 1.4.4

Catfish 1.4.4 is included with Xubuntu 18.04. This maintenance release features improved performance, additional error handling, and numerous translation updates.

##### MenuLibre 2.2.0

MenuLibre 2.2.0 is a significant release with a multitude of new features, fixes, and supported desktops. Users can now test their launchers directly from MenuLibre. Additionally, you can sort submenus, install launchers in any directory, and identify issues in existing launchers. Desktop environment support has been extended to include Budgie, Cinnamon, EDE, LXQt, KDE Plasma, MATE, and Pantheon.

#### Xfce

##### Parole Media Player 1.0.1

Parole 1.0.0 introduces the new “Automatic” video output, selected by default. This new output will automatically select the best available option for your hardware, leading to improved performance and reduced configuration issues. Videos are finally playable in Virtualbox with this update.

##### Thunar 1.6.15

Thunar has had a lot of development time in recent months while it heads toward a stable GTK+ 3 release. This release benefits from that development with a large number of bug fixes backported to ensure that Thunar is and continues to be a dependable file manager.

##### Xfce Power Manager 1.6.1

Xfce Power Manager has been ported to GTK+ 3 and includes a number of improvements and new features.

* Improved “Presentation Mode” ensures the screensaver is inhibited while active
* Option to display battery percentage and/or remaining run time when on battery power
* Numerous bug fixes

##### Xfce Notifications 0.4.2

The latest version of the Xfce notification daemon includes a panel plugin, support for links in notifications, and improved markup support. The panel plugin allows for quick access to the “do not disturb” mode and recent notifications.

#### LibreOffice 6.0

The latest version of LibreOffice is included with Xubuntu 18.04. This release features better file compatibility with Microsoft Office, Abiword, and QuarkExpress. One of the major release highlights is the inclusion of the elementary icon theme for all installations (including Windows and Mac OS X). This theme was first featured in Xubuntu 16.04 "Xenial Xerus".

#### Firefox & Thunderbird

The latest and greatest versions of Firefox and Thunderbird are included. Firefox recently rolled out their “Quantum” changes, making recent releases incredibly responsive and faster than ever.

### Xfce

Development on Xfce 4.14 is moving right along, but will not be included in Xubuntu 18.04. While we won’t be getting the next generation Xfce desktop, we do have some additional stable updates and development goodies for everyone to enjoy.

#### Applications

* Xfburn 0.5.5
* Xfce Panel 4.12.2
* Xfce Power Manager 1.6.1 (Now GTK+ 3)
* Xfce Terminal 0.8.7
* Xfce Weather Plugin 0.8.10
* Xfce Whisker Menu Plugin 2.1.5
* Xfce XKB Plugin 0.8.1 (Now GTK+ 3)

#### Libraries

* exo 0.12.0 (first stable Xfce 4.14-ready release)
* libxfce4ui 4.13.4

### Login & Locking

The Xubuntu login screen has had several improvements this development cycle, and there are more on the way! LightDM GTK+ Greeter has received fixes for accessibility, autologin, and the occasional freeze with multiple monitors. It's accompanying configuration tool now detects more recent GTK themes.

### Hardware Support

#### Bluetooth

The PulseAudio Bluetooth module has been included, meaning Bluetooth audio devices will now work out of the box in Xubuntu! Blueman has been updated to version 2.0.5 and includes several fixes for game controllers and modems.

#### Numlock

We’ve integrated numlockx into our startup for improved support of keyboard number pads. Numlock will now automatically be enabled for all users, regardless of BIOS support.

## Xubuntu core
The [Xubuntu core](https://xubuntu.org/news/introducing-xubuntu-core/) project is still solely a community based effort and as such, the produced ISOs can be downloaded from the unofficial [contributor's site](https://unit193.net/xubuntu/core/).

## Changelogs

### Xubuntu/Other Packages

* blueman ([changelog](https://launchpad.net/ubuntu/bionic/+source/blueman/+changelog))
* gtk-theme-config ([changelog](https://launchpad.net/ubuntu/bionic/+source/gtk-theme-config/+changelog))
* gtk2-engines-xfce ([changelog](https://launchpad.net/ubuntu/bionic/+source/gtk2-engines-xfce/+changelog))
* lightdm-gtk-greeter ([changelog](https://launchpad.net/ubuntu/bionic/+source/lightdm-gtk-greeter/+changelog))
* lightdm-gtk-greeter-settings ([changelog](https://launchpad.net/ubuntu/bionic/+source/lightdm-gtk-greeter-settings/+changelog))
* menulibre ([changelog](https://launchpad.net/ubuntu/bionic/+source/menulibre/+changelog))
* mugshot ([changelog](https://launchpad.net/ubuntu/bionic/+source/mugshot/+changelog))
* pavucontrol ([changelog](https://launchpad.net/ubuntu/bionic/+source/pavucontrol/+changelog))
* sgt-launcher ([changelog](https://launchpad.net/ubuntu/bionic/+source/sgt-launcher/+changelog))
* shimmer-themes ([changelog](https://launchpad.net/ubuntu/bionic/+source/shimmer-themes/+changelog))
* xfce4-volumed ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-volumed/+changelog))
* xfpanel-switch  ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfpanel-switch/+changelog))
* xubuntu-artwork ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-artwork/+changelog))
* xubuntu-core ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-meta/+changelog))
* xubuntu-default-settings ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-default-settings/+changelog))
* xubuntu-desktop ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-meta/+changelog))
* xubuntu-docs ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-docs/+changelog))
* xubuntu-icon-theme ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-icon-theme/+changelog))
* xubuntu-meta ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-meta/+changelog))
* xubuntu-wallpapers ([changelog](https://launchpad.net/ubuntu/bionic/+source/xubuntu-artwork/+changelog))

### Xfce Core

* exo ([changelog](https://launchpad.net/ubuntu/bionic/+source/exo/+changelog))
* thunar ([changelog](https://launchpad.net/ubuntu/bionic/+source/thunar/+changelog))
* xfce4-appfinder ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-appfinder/+changelog))
* xfce4-panel ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-panel/+changelog))
* xfce4-power-manager ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-power-manager/+changelog))
* xfce4-session ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-session/+changelog))
* xfce4-settings ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-settings/+changelog))
* xfconf ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfconf/+changelog))
* xfdesktop4 ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfdesktop4/+changelog))
* xfwm4 ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfwm4/+changelog))

### Xfce Applications

* catfish ([changelog](https://launchpad.net/ubuntu/bionic/+source/catfish/+changelog))
* mousepad ([changelog](https://launchpad.net/ubuntu/bionic/+source/mousepad/+changelog))
* orage ([changelog](https://launchpad.net/ubuntu/bionic/+source/orage/+changelog))
* parole ([changelog](https://launchpad.net/ubuntu/bionic/+source/parole/+changelog))
* xfburn ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfburn/+changelog))
* xfce4-notifyd ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-notifyd/+changelog))
* xfce4-screenshooter ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-screenshooter/+changelog))
* xfce4-taskmanager ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-taskmanager/+changelog))
* xfce4-terminal ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-terminal/+changelog))

### Xfce Panel Plugins

* xfce4-cpugraph-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-cpugraph-plugin/+changelog))
* xfce4-dict ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-dict/+changelog))
* xfce4-indicator-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-indicator-plugin/+changelog))
* xfce4-mailwatch-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-mailwatch-plugin/+changelog))
* xfce4-netload-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-netload-plugin/+changelog))
* xfce4-notes-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-notes-plugin/+changelog)
* xfce4-places-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-places-plugin/+changelog))
* xfce4-pulseaudio-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-pulseaudio-plugin/+changelog))
* xfce4-quicklauncher-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-quicklauncher-plugin/+changelog))
* xfce4-statusnotifier-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-statusnotifier-plugin/+changelog))
* xfce4-systemload-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-systemload-plugin/+changelog))
* xfce4-verve-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-verve-plugin/+changelog))
* xfce4-weather-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-weather-plugin/+changelog))
* xfce4-whiskermenu-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-whiskermenu-plugin/+changelog))
* xfce4-xkb-plugin ([changelog](https://launchpad.net/ubuntu/bionic/+source/xfce4-xkb-plugin/+changelog))
