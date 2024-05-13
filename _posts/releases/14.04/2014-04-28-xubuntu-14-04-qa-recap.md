---
title:       "Xubuntu 14.04 QA Recap"
date:        2014-04-28 16:13:27
slug:        xubuntu-14-04-qa-recap
release:     "14.04"
serie:       
category:    articles
author:      flocculant
author_nick: flocculant
---

Now that Trusty is out the door, we thought that the time was right to bring you a recap of what you've managed to do for Xubuntu during the last cycle and what we've been up to behind the curtain. Those of you who frequent the #xubuntu-devel channel are likely aware of how much the work people testing do is appreciated. The remainder of you perhaps don't, or just assume so.

So without further dithering I'll get right on with it.

Package Testing
---------------

Following on from the huge effort made during the Saucy cycle to create new testcases, we were able to use this work during the whole of this LTS cycle. For the first time Xubuntu were able to use specific tests for the applications and packages as well as images. There are in excess of 200 reports recorded in the package tracker for this last cycle. It does make life a lot easier to know we have this availability, the reported bugs make it onto a blueprint from where we can monitor progress during the cycle. Whether we use the same entire set of tests for the next cycle is not set yet, possibly we'll work differently in non-LTS cycles.

For the various sections we have on our tracker

- Xfce Applications (8 tests) - 58 reports
- Xfce Core (9 tests) - 53 reports
- Xfce Settings Manager (13 tests) - 59 reports
- Xubuntu Applications (6 tests) - 23 reports
- Xubuntu Networking (4 tests) - 10 reports
- Trusty Additional (6 tests) - 29 reports

Something to take away from all this reporting - you've found and reported 50 bugs during the cycle, that is more than for Ubuntu Desktop, Kylin Desktop, Lubuntu Desktop, Ubuntu Gnome and Common Desktop combined, **that is great work**.

Thanks should go to those of you involved in the original effort to write them and to those who have taken the time to report at the tracker and fed back the bugs you found.

Image Testing
-------------

### Daily and Milestone Testing

Nothing new going on in this area during the Trusty cycle. We tend to get more testing done in a short time during milestones, over the whole cycle we've had almost 800 reported tests for daily image testing.

That number can be broken down to

**Daily testing**

- 64-bit 293
- 32-bit 316

**Milestone testing**

- 64-bit 73
- 32-bit 86

### Upgrade Testing

This was always going to be important this cycle. Not only is there an upgrade path from 13.10 to 14.04 for us to test, but as this cycle ends with the release of the new LTS, we've had 12.04 to 14.04 to contend with in addition.

Increasing the importance of this upgrade path has been the new landing applications for the 14.04 release, GTK3 indicators, the change to light-locker from xscreensaver, and the visual changes - loss of the bottom panel being the most obvious.

**12.04 to 14.04 upgrade**

- Beta 1 and previous- 9 tests
- Beta 2 None
- post Beta 2 - 17 tests

**13.10 to 14.04**

- Beta 1 and previous - 4 tests
- Beta 2 None
- post-Beta 2 - 20 tests

As can be seen the numbers weren't so good here.

Launchpad groups
----------------

### xubuntu-testers

This cycle we actually made use of this user group during testing calls. I suspect that came as a surprise to those in that group but not subscribed to the -devel mailing list, get used to it though - it won't be changing. For those of you who get the same mail twice, I apologise - a bit.

It *could* be that it made a difference - but there's no way of actually telling if it did or not. What can be said is that this cycle we've seen new people appearing on the two trackers we use. This is obviously good, but the 2 trackers we use have in the region of 30 names on them, which the whole team would love to see increase. When you know that there are at least ~143,000 installed xubuntu-default-settings out there, around 40 reporting testers isn't a great deal.

Specific thanks go to these users who actually did the reporting for us: akxwi-dave, bb70, bryanquigley, cc-inc, decockbernard, dkessel, dp-w, elfy, eric-koegel, gayle-adamyan, gridcube, hallo32, hugoangelo, irihapeti, j-bardales, jhe, jibel, jjfrv8, knome, lderan, lyz, migouste, noskcaj, paulocesarsc, paulw2u, pianoforte, samuelgabbay1, schproodle, scottbomb, sergio-br2, skellat, slickymaster, smiddy84, texadactyl, toz, truckinpapa, unit193, voxtred, wkrekik, zakzor

It really does make a difference to us to see the users, reports and associated bugs.

### xubuntu-qa

This new group was created with the intention that a route into the xubuntu-team now existed for this important part of the development cycle. Previously there was no obvious route into xubuntu-team for those working predominately in testing and QA. If you are interested in being part of the QA team - then we'll be wanting to see you in the IRC channel and on the mailing list.

Blogging on Xubuntu
-------------------

This cycle, in addition to the normal release notes at milestone time, we have been using the website to talk about aspects of the QA cycle.

This will continue into the next cycle - at which point we'll take a breath and think again. If anyone has any thoughts or ideas of articles that we could look to write, then please contact a member of the [QA Launchpad team](https://launchpad.net/~xubuntu-qa).

Social Media
------------

The Xubuntu website team have been ensuring that any calls from QA for milestone testing have been mentioned on at least one or more of Twitter, Facebook or Google+.

During the next cycle we'll look towards including the regular calls for Package testing on our Social Media outlets.

New landings
------------

Testing for the new landing applications was never going to be an easy task - and it wasn't. Time was everyone's enemy here - time to do the work, then time to get testing done in a suitable manner for all concerned, the people dealing with the docs had to get the new docs ready as well. But, we did it - in time, and robust enough that we were happy to release with them.

Looking forward to the next cycle
---------------------------------

So, shortly we'll start again with the next cycle, we hope that not only will those of you who've walked the Trusty road with us carry on doing so, but that we get more people join us as we march towards October 2014.

We are still working towards automated testing for some of our applications, this is being effectively dealt with by just a couple of people in the team, *so if you are proficient with Python and are looking for something to do*, or just want to help Xubuntu, come and talk to us about that.

If you have any constructive thoughts or ideas on how we can improve the testing we do for Xubuntu, please feel free to mail us on the xubuntu-devel mailing list or pop into the IRC channel and talk to us.
