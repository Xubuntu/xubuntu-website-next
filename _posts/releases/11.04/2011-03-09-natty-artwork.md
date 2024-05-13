---
title:       "Xubuntu Natty Artwork"
date:        2011-03-09 09:25:23
slug:        natty-artwork
release:     "11.04"
serie:       
category:    articles
author:      Elizabeth K. Joseph
author_nick: pleia2
---

As one of Xubuntu's artwork contributors and member of the [Shimmerproject](http://www.shimmerproject.org) I would like to take some time now - towards the end of this cycle - and discuss (at least parts of) the design process during the development phase for Natty (11.04). This is planned as a *review* and in a way (implicitely) a *preview*: you can see the direction Xubuntu is heading for since Maverick and Natty and hopefully the project will continue this way.

### Looking back on the previous release (aka Maverick)

We started out in early November to analyze what had happened during the Maverick cycle and I realized that with a few aspects of that particular cycle I was really unhappy. For one we started out with developing Bluebird (Maverick's new theme, which was designed as a bright pendant to the well-proven Albatross) very late and also other changes (mostly icons) were done at the last minute. Therefore we didn't have time to (**1**) go through sufficient testing and (**2**) gather feedback to evaluate and fine-tune the theme. Other than that the cooperation with the Xubuntu team worked fine, although I think we didn't communicate enough.

### Evaluating the current cycle (aka Natty)

In Natty we started pretty early, basically shortly after Maverick was released in late October of 2010 and I continuously developed *"Greybird"*, which is code-wise and experience-wise based on *Bluebird*. We got a lot of feedback from the community that suggested that the blue tones were too intense and in general the reactions were polarizing (meaning: some really liked it, other really disliked it). Therefore I decided to take a different approach and start again with *less colors* (hence the codename "Greybird") and see where we would get with that. Charlie (Xubuntu's Project Leader) decided already during Maverick that one focus of Natty development should be accessibility, in my approach for Greybird these *two motivations* (less colors for daily use, accessibility) played along very nicely. The whole development process was (at least semi-)public from the beginning, the members of the Xubuntu community provided feedback during the community-meetings and as we felt ready we went public and links and screenshots were published and discussed on various blogs.

Other than the *gtk-theme* we also did a new *xfwm4-theme* (based on the elementary-theme by the elementary Team) and decided to go for *bigger changes with the panels*, making use of the new functions we gained from Xfce4.8. There's now the top panel that traditionally shows the menu-button and system-tray, but now it also contains the list of open windows. So basically the functionality of the two panels has been merged into one. I think the *gain in vertical screen estate* will be appreciated by users of 16:10 or 16:9 resolutions. In the lower edge we decided to auto-hide the launcher panel, the applications we consider most important for a new user are only one click away with that. This panel is easily customizable, to create new launchers simply drag and drop them from either the menu, appfinder or /usr/share/applications in Thunar. Since the compositor is now switched on by default we can make use of the new panel's gorgeous alpha-transparency and the lower launcher-panel looks beautifully semi-transparent.

One more issue that we were able to fix because we started with artwork so early in the cycle is the *resize-grips*, which are now shown in practically every window. Since most other urgent things were fixed already it was possible for us to focus on that issue and solve it gracefully: we now have a beautiful and accessible resize-grip in Greybird.

### Looking ahead

As most of you know the UI-freeze is still some time away, so some things are still in the move. I had more plans for Natty than I was (or will be) able to finish in time (some of those plans and ideas developed throughout the cycle though), so I hope we will take the time and improve our project management by one more step: adding a roadmap for Natty+1 shortly after the release in April.
