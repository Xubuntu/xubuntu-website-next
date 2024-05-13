---
title:       "Reporting is caring"
date:        2014-02-14 16:06:39
slug:        reporting-is-caring
release:     ""
serie:       getting-started-development
category:    articles
author:      flocculant
author_nick: flocculant
---

While testing the developer versions in any way possible is a great idea, there isn't much benefit in messages telling us Xubuntu works on machine X, or there were no problems with upgrading machine Y.

Why? It's not measurable.

The following sections will explain the kind of figures we would like to measure, why those figures are important and will hopefully give you some motivation to start running and and *reporting* tests.

Measuring success or failure
----------------------------

The tests reported on the [package](http://packages.qa.ubuntu.com/qatracker) and [ISO](http://iso.qa.ubuntu.com/qatracker) trackers help us measure several figures, including:

**Bugs that are being reported.** The number and quality of bugs help us measure how smooth the user experience is. In addition, since the bugs are found when running specific testcases, reproducing them is usually trivial, which in turn allows us to get working on them and get them fixed faster.

Of course, doing *exploratory testing* helps us find bugs that our usual routines do not catch. This is why it's *also* important to do tests that go beyond the testcases. If you find such bugs while running a testcase, please report them as well.

**The amount of testing that has been done.** While quantity doesn't replace or imply quality, it's important to know how thoroughly the tests have been run. This is all the more true when people are able to run tests with varying hardware and not just *virtualized environments*.

**The number of people testing.** Usually, more eyes find more bugs. Along with the number of tests run, this helps us get a sense of how thorough the testing was.

Furthermore, the last two figures also help us decide whether we need to run more calls for testers as we prepare for the next milestone or cadence testing.

Bring out your results
----------------------

Simply put, reported results are the only reliable way we have to gauge these figures. In the ideal situation, the number of bugs reported is going down while the number of testers and tests run is going up.

However, if the reported results we are currently looking at are the reality, then on average Xubuntu gets released after being tested by somewhere in the region of 20 people. After the release, the version in question is used by thousands. We're sure that you'd not like to think that!

As you might gather, reporting tests is almost as important as your testing in the first place. Starting reporting will be an extra step or two for you, but don't be afraid – we will help you to get started and help you throughout.

Getting started
---------------

If you are one of those unsung heroes who is regularly out there testing for us – let us know, we'll be looking, as always, for new names on the trackers. Reports are made at each meeting on how testing has gone in the preceding week.

To get started, subscribe to the [Xubuntu development mailing list](https://lists.ubuntu.com/mailman/listinfo/xubuntu-devel) – you'll see all the calls from QA that way.

If you have any questions about how to get involved, then members of the Xubuntu QA team can usually be found in [\#xubuntu-devel](http://webchat.freenode.net/?channels=xubuntu-devel) on Freenode and will be happy to help, as will most that you'll see in there.

Again, please remember that Xubuntu is a completely community driven project. If you are reading this and are running Xubuntu, consider giving back. Thank you!
