---
title:       "Xubuntu is now on GitHub!"
date:        2020-05-23 21:16:52
slug:        xubuntu-is-now-on-github
release:     ""
serie:       
category:    articles
author:      Sean Davis
author_nick: bluesabre
---

On Tuesday, May 18th, the [Xubuntu Team voted](http://ubottu.com/meetingology/logs/xubuntu-devel/2020/xubuntu-devel.2020-05-19-21.02.log.html#l-120) to migrate some of our infrastructure away from Launchpad to [GitHub](https://github.com/Xubuntu) for code hosting, while translations are now on [Transifex](https://www.transifex.com/xubuntu/public/). Here's a summary of the changes:

- We have a new GitHub organization, under the Xubuntu name. Each subteam has an equivalent in the new organization.
- All codebases have been migrated to GitHub.
- All translations have moved to Transifex.
- Every codebase moved to GitHub has been mirrored on Launchpad. This supports our daily package builds, and allows community members to continue using only Launchpad if they choose.

The following functionality has not changed:

- Issues are still reported on Launchpad for each package, and `ubuntu-bug` continues to work as it always has.
- PPAs and daily package builds will continue to be updated as normal.

Why GitHub?
-----------

We've chosen to move to GitHub to make it easier for individuals to contribute to the project. As one of the largest platforms for software development, this is where we can reach the largest number of potential contributors while eliminating various barriers to entry. Here's just some of the reasons we're moving:

- Ubuntu and many of its flavors already host their code on GitHub.
- Many of our upstream and downstream projects are already on GitHub or have mirrors there.
- GitHub's Web IDE simplifies contributions. Non-technical users can easily submit changes to their favorite projects, and maintainers can accept them just as easily.
- Discoverability is improved. All of Xubuntu's projects can be found from [a single page](https://github.com/xubuntu).

Why Transifex?
--------------

Transifex is a popular, web-based translation platform. They support open source projects by making their solutions free for any FOSS project, and have long been the translation solution for our primary upstream, Xfce. With their simple GitHub integration, we were able to quickly and easily move and have our translations automatically syncing in both directions.

To find all of our projects needing translators and to sign up, just visit our public page: <https://www.transifex.com/xubuntu/public/>

Okay, Great! Now What?
----------------------

We encourage everybody to join us in breaking in our new platforms. Here's how you can get started:

- **Watch** and **star** our projects! Watching a project will keep you in the loop for the latest changes. [Starring](https://help.github.com/en/github/getting-started-with-github/saving-repositories-with-stars) a project will make it easier to find in the future, and help you discover similar projects.
- **Fork** our projects! [Forking](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) a repository makes a copy under your own profile. Make some changes and submit a pull request to include them in Xubuntu.
- Join the translations team! Xubuntu is used all around the world. Help us localize our software and documentation to make a global impact.

Don't know where to begin? Checkout our **[Get Involved](https://xubuntu.org/contribute/)** page to learn how you can contribute to our Artwork, Development, Documentation, Marketing, and Quality Assurance. Here's some links to help you get to the right place:

- [Xubuntu](https://github.com/xubuntu) on GitHub (code, marketing materials, and more)
- [Xubuntu](https://www.transifex.com/xubuntu/public/) on Transifex (translations)
- [Xubuntu-tagged bugs](https://bugs.launchpad.net/bugs/+bugs?field.searchtext=&orderby=-importance&field.status%3Alist=NEW&field.status%3Alist=CONFIRMED&field.status%3Alist=TRIAGED&field.status%3Alist=INPROGRESS&field.status%3Alist=FIXCOMMITTED&field.status%3Alist=INCOMPLETE_WITH_RESPONSE&field.status%3Alist=INCOMPLETE_WITHOUT_RESPONSE&assignee_option=any&field.assignee=&field.bug_reporter=&field.bug_commenter=&field.subscriber=&field.tag=xubuntu&field.tags_combinator=ANY&field.status_upstream-empty-marker=1&field.has_cve.used=&field.omit_dupes.used=&field.omit_dupes=on&field.affects_me.used=&field.has_patch.used=&field.has_branches.used=&field.has_branches=on&field.has_no_branches.used=&field.has_no_branches=on&field.has_blueprints.used=&field.has_blueprints=on&field.has_no_blueprints.used=&field.has_no_blueprints=on&search=Search) on Launchpad
