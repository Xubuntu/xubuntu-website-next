---
title:       "Artwork Project for 15.10: Making LibreOffice look integrated"
date:        2015-07-27 21:25:37
slug:        artwork-project-for-15-10-making-libreoffice-look-integrated
release:     "15.10"
serie:       
category:    articles
author:      Simon Steinbeiß
author_nick: ochosi
---

[![The Document Foundation]({{ site.baseurl }}/assets/articles/2015/tdflogo.png)](http://www.documentfoundation.org)

Many users or members of the community will know this already, but just for the sake of clarity: Xubuntu 15.10 Wily Werewolf will be the first release to ship LibreOffice by default. This has been a long-standing and often-repeated request so we decided to try and evaluate this on our way to the next LTS release, which will be 16.04.

Consequently, we started evaluating LibreOffice's integration in our Desktop Environment. While there is already a package which provides integration with the Gtk+ theme (libreoffice-gtk), we found that none of the existing icon themes really worked too well with Xubuntu's default theme *elementary-xfce*. Ubuntu's *human* theme – being the closest match because of having *elementary* on its base – has been abandoned a longer while ago and looks a bit dated (and frankly too orange for Xubuntu). Other options like *Tango* work quite well with our color scheme, but still aren't a perfect match.

So our artwork team went ahead and started working on the most prominent icons in LibreOffice Writer and Calc – the two applications shipped by default. The majority of those icons has been either ported or re-done with elementary in mind. Furthermore, over the course of the last months several icons specific to LibreOffice Impress have been tackled. The preliminary results are available for testing already and the final result will be shipped with the release of Xubuntu 15.10. We're also working with the LibreOffice team to get the new icon theme integrated upstream, so more distributions and users can benefit from our work.

Contribute
----------

If you want to contribute, feel free to get in touch with [Simon](https://launchpad.net/~ochosi), our Artwork Lead, or clone the repository and submit your merge requests directly on GitHub (link below).

Screenshots
-----------

### LibreOffice Writer

![LibreOffice Writer]({{ site.baseurl }}/assets/articles/2015/lo-writer.png)

### LibreOffice Calc

![LibreOffice Calc]({{ site.baseurl }}/assets/articles/2015/lo-calc.png)

### LibreOffice Impress

![LibreOffice Impress]({{ site.baseurl }}/assets/articles/2015/lo-impress.png)

Project Links
-------------

- [Source Code](https://github.com/shimmerproject/libreoffice-style-elementary) (GitHub repository)
- [Shimmer Daily PPA on Launchpad](https://launchpad.net/~shimmerproject/+archive/daily) (builds for 14.04 and 15.04)
