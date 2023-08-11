# Eclipse Jetty Website

This directory contains the contents that are served from the https://eclipse.dev/jetty website.

File updates to this repository will be deployed automatically based on an interval set by the Eclipse webmasters (~5 minutes).

To update the site for a new Jetty release, modify [_jettyVersions.txt](https://github.com/eclipse/jetty-website/blob/master/_jettyVersions.txt) to reflect the newly released version and commit. The build will be made on [Jetty Jenkins](https://jenkins.webtide.net/job/website/job/jetty-website/job/master/) via a webhook, and pending a successful build, the new content will become available on the website.
