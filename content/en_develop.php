<?php
/**
 * Copyright (c) 2014, 2015, 2016, 2018 Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * Contributors:
 *   Christopher Guindon (Eclipse Foundation) - Initial implementation
 *   Eric Poirier (Eclipse Foundation)
 *
 * SPDX-License-Identifier: EPL-2.0
 */
?>

<!-- Main content area -->
<div id="midcolumn">

    <h2 id="cg-source"><a class="anchor" href="#cg-source"></a><a class="link" href="#cg-source">Participate in the
            Code</a></h2>
    <div class="sectionbody">
        <div class="paragraph">
            <p>If you are more interested in digging into what makes Jetty tick then this some information that you will
                need to arm yourself with.
                First we start with how to checkout and build Jetty, then on to our general coding standards followed by
                the actual patch contribution process.</p>
        </div>
        <div class="sect2">
            <h3 id="cg-community-source"><a class="anchor" href="#cg-community-source"></a><a class="link"
                                                                                              href="#cg-community-source">Source
                    Control</a></h3>
            <div class="paragraph">
                <p>The <a href="https://github.com/jetty/jetty.project">Eclipse Jetty project</a> is located at <a
                            href="https://github.com">Github</a> under the Eclipse Foundation <a
                            href="https://github.com/eclipse">parent project</a>. There are a number of branches that
                    are generally of interest.</p>
            </div>
            <table class="tableblock frame-all grid-all stretch">
                <caption class="title">Table 1. Active Eclipse Jetty Branches</caption>
                <colgroup>
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                    <col style="width: 25%;">
                </colgroup>
                <tbody>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-10.0.x">jetty-11.0.x</a>
                        </p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Development</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 5.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 11+</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-10.0.x">jetty-10.0.x</a>
                        </p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Development (default branch)</p>
                    </td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 4.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 11+</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-9.4.x">jetty-9.4.x</a></p>
                    </td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Maintenance</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 3.1</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 8</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-9.3.x">jetty-9.3.x</a></p>
                    </td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Maintenance</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 3.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 8</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-8.1.x">jetty-8.1.x</a></p>
                    </td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Historical</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 2.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 7</p></td>
                </tr>
                <tr>
                    <td class="tableblock halign-left valign-top"><p class="tableblock"><a
                                    href="https://github.com/jetty/jetty.project/tree/jetty-7">jetty-7</a></p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Mythical</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Servlet 1.0</p></td>
                    <td class="tableblock halign-left valign-top"><p class="tableblock">Java 6</p></td>
                </tr>
                </tbody>
            </table>
            <div class="paragraph">
                <p>If you are planning on working with a specific issue within Jetty it is important to target the
                    correct branch for a pull request. Pull requests that are targeted at Maintenance Branches are
                    typically merged forward into subsequent branches while historical branches are left alone merge
                    wise. Depending on the nature of an issue a historical branch may have an issue cherrypicked
                    forward, but maintenance releases are merged wholesale forward as a matter of project policy.</p>
            </div>
            <div class="sect3">
                <h4 id="cg-primary-scm"><a class="anchor" href="#cg-primary-scm"></a><a class="link"
                                                                                        href="#cg-primary-scm">Primary
                        SCM</a></h4>
                <div class="paragraph">
                    <p>The primary repository for Jetty is:</p>
                </div>
                <div class="dlist">
                    <dl>
                        <dt class="hdlist1">Jetty Project Repository</dt>
                        <dd>
                            <p><a href="https://github.com/jetty/jetty.project" class="bare">https://github.com/jetty/jetty.project</a>
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="sect3">
                <h4 id="cg-secondary-scm"><a class="anchor" href="#cg-secondary-scm"></a><a class="link"
                                                                                            href="#cg-secondary-scm">Secondary
                        SCM</a></h4>
                <div class="paragraph">
                    <p>These are the URLs for Jetty-related code and metadata.
                        These are not needed to use Jetty; these are primarily of use for developers who are working
                        with the open source project within Eclipse.</p>
                </div>
                <div class="dlist">
                    <dl>
                        <dt class="hdlist1">Build related artifacts that release separately, common assembly
                            descriptors, remote resources, etc.
                        </dt>
                        <dd>
                            <p><a href="https://github.com/eclipse/jetty.toolchain" class="bare">https://github.com/eclipse/jetty.toolchain</a>
                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="sect2">
            <h3 id="t-contributing-build"><a class="anchor" href="#t-contributing-build"></a><a class="link"
                                                                                                href="#t-contributing-build">Maven
                    Build</a></h3>
            <div class="paragraph">
                <p>Eclipse Jetty uses <a href="http://maven.apache.org/">Apache Maven</a> for managing the project
                    metadata and controlling the build.</p>
            </div>
            <div class="paragraph">
                <p>Building Jetty should simply be a matter of changing into the relevant directory and executing the
                    following commands:</p>
            </div>
            <div class="listingblock">
                <div class="content">
<pre class="highlight"><code class="language-screen" data-lang="screen">$ git clone https://github.com/jetty/jetty.project.git
$ cd jetty.project
$ mvn install</code></pre>
                </div>
            </div>
            <div class="paragraph">
                <p>All relevant dependencies should be downloaded into your local repository automatically and the build
                    should proceed normally.</p>
            </div>
            <div class="quoteblock">
                <blockquote>
                    <div class="admonitionblock note">
                        <table>
                            <tr>
                                <td class="icon">
                                    <i class="fa icon-note" title="Note"></i>
                                </td>
                                <td class="content">
                                    Jetty has a great many test cases that run through the course of its build. Many of
                                    these tests spin up embedded instances of Jetty itself and it is not uncommon to see
                                    hundreds or more instances of Jetty start and stop during tests.
                                    Periodically we find some test cases to be more time dependent than they should be
                                    and this results in intermittent test failures.
                                    You can help track these down by opening an <a
                                            href="https://github.com/jetty/jetty.project/issues">Issue</a>.
                                </td>
                            </tr>
                        </table>
                    </div>
                </blockquote>
            </div>
        </div>
        <div class="sect2">
            <h3 id="cg-coding-standards"><a class="anchor" href="#cg-coding-standards"></a><a class="link"
                                                                                              href="#cg-coding-standards">Coding
                    Standards</a></h3>
            <div class="paragraph">
                <p>Jetty uses number of conventions for its source code. The developers of Jetty use a variety of
                    tooling and editors when developing Jetty so standards and conventions are important!</p>
            </div>
            <div class="sect3">
                <h4 id="cg-intelli-j"><a class="anchor" href="#cg-intelli-j"></a><a class="link" href="#cg-intelli-j">Intelli-J</a>
                </h4>
                <div class="paragraph">
                    <p>The suggested configuration for Intelli-J when working with Jetty is available here: <a
                                href="http://git.eclipse.org/c/jetty/org.eclipse.jetty.admin.git/tree/idea-jetty-codestyle-settings.jar">Intelli-J
                            Codestyle</a></p>
                </div>
            </div>
            <div class="sect3">
                <h4 id="cg-eclipse"><a class="anchor" href="#cg-eclipse"></a><a class="link"
                                                                                href="#cg-eclipse">Eclipse</a></h4>
                <div class="paragraph">
                    <p>The Eclipse format configuration can be found here:
                        <a href="http://git.eclipse.org/c/jetty/org.eclipse.jetty.admin.git/tree/jetty-eclipse-java-format.xml">Eclipse
                            Java Formatting</a></p>
                </div>
                <div class="paragraph">
                    <p>There are also some templates available for Eclipse here:
                        <a href="http://git.eclipse.org/c/jetty/org.eclipse.jetty.admin.git/tree/jetty-eclipse-codetemplates.xml">Eclipse
                            Code Templates</a></p>
                </div>
            </div>
            <div class="sect3">
                <h4 id="cg-code-conventions"><a class="anchor" href="#cg-code-conventions"></a><a class="link"
                                                                                                  href="#cg-code-conventions">Code
                        Conventions</a></h4>
                <div class="paragraph">
                    <p>The following is an example of the Java formatting and naming styles to apply to Jetty:</p>
                </div>
                <div class="listingblock">
                    <div class="content">
<pre class="highlight"><code class="language-java" data-lang="java">import some.exact.ClassName;      // GOOD
import some.wildcard.package.*;   // BAD!

package org.always.have.a.package;

/* --------------------------------------------------------- */
/** Always have some javadoc
 */
class MyClassName
{
    // indent by 4 spaces.
    // use spaced to indent
    // The code must format OK with default tabsize of 8.

    private static final int ALL_CAPS_FOR_PUBLIC_CONSTANTS=1;

    // Field prefixed with __ for static of _ for normal fields.
    // This convention is no longer mandatory, but any given
    // class should either consistently use this style or not.
    private static String __staticField;
    private Object _privateField;


    // use getters and setters rather than public fields.
    public void setPrivateField(Object privateField)
    {
        _privateField=privateField;
    }

    public Object getPrivateField()
    {
        return _privateField;
    }

    public void doSomething()
        throws SomeException
    {
        Object local_variable = _privateField;
        if (local_variable==null)
        {
             // do Something
        }
    }
}</code></pre>
                    </div>
                </div>
                <div class="paragraph">
                    <p>While Eclipse Jetty is an open source project it is also a member of the Eclipse Foundation which
                        carries along some additional responsibilities.
                        Intellectual Property is a hallmark concern of the Eclipse Foundation so you are encouraged to
                        understand what that entails before diving in.
                        As much as we would like to accept a tremendous pull request, without the proper chain of events
                        being completed our hands are tied.
                        That being said, the steps are not particularly onerous and we are happy to work with you to get
                        them accomplished.</p>
                </div>
            </div>
            <div class="sect3">
                <h4 id="cg-logging-conventions"><a class="anchor" href="#cg-logging-conventions"></a><a class="link"
                                                                                                        href="#cg-logging-conventions">Logging
                        Conventions</a></h4>
                <div class="paragraph">
                    <p>When deciding when and what to log, bear in mind a few things:</p>
                </div>
                <div class="ulist">
                    <ul>
                        <li>
                            <p>never use <code>LOG.debug</code> without a preceding <code>if
                                    (LOG.isDebugEnabled())</code></p>
                        </li>
                        <li>
                            <p>we don&#8217;t want to pollute the log with very long stacktraces unless necessary</p>
                        </li>
                        <li>
                            <p>we don&#8217;t want to routinely produce logging events in response to data sent by a
                                user</p>
                        </li>
                        <li>
                            <p>we should not call more than one LOG method for a single event: otherwise log messages
                                may be interleaved and more confusing</p>
                        </li>
                        <li>
                            <p>we should never LOG.warn and then throw that exception, as that will result in double
                                handling</p>
                        </li>
                        <li>
                            <p>we should seldom LOG.debug and then throw as that will make debug verbose and add little
                                information</p>
                        </li>
                        <li>
                            <p>when interacting with a request, or information received from a client:</p>
                            <div class="ulist">
                                <ul>
                                    <li>
                                        <p>no logging unless <code>isDebugEnabled</code>, in which case you output at
                                            <code>DEBUG</code> level eg:</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="listingblock">
                    <div class="content">
<pre>  catch (Throwable t)
  {
     if (LOG.isDebugEnabled())
       LOG.debug("Something happened {} {} {}",x, y, z, t);
  }</pre>
                    </div>
                </div>
                <div class="ulist">
                    <ul>
                        <li>
                            <p>when calling into application code that throws an exception:</p>
                            <div class="ulist">
                                <ul>
                                    <li>
                                        <p>use <code>INFO</code> level, and use <code>isDebugEnabled</code> to cut down
                                            on the size of the logging of stack traces:</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="listingblock">
                    <div class="content">
<pre>  catch (Throwable t)
  {
    if (LOG.isDebugEnabled())
      LOG.info("Something happened {} {} {}", x, y, z, t);
    else
      LOG.info("Something happened {} {} {} {}", x, y, z, t.toString());
  }</pre>
                    </div>
                </div>
                <div class="ulist">
                    <ul>
                        <li>
                            <p>when exceptions happen in jetty code:</p>
                            <div class="ulist">
                                <ul>
                                    <li>
                                        <p>mostly use <code>WARN</code> or <code>ERROR</code> level</p>
                                    </li>
                                    <li>
                                        <p>if the exception is not entirely unexpected, can happen relatively
                                            frequently, or can potentially have a very long stack trace and you don&#8217;t
                                            want to clutter up the log, you can use <code>isDebugEnabled</code> to cut
                                            down on the size of the logging of the stacktrace:</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="listingblock">
                    <div class="content">
<pre>  catch (Throwable t)
  {
    if (LOG.isDebugEnabled())
      LOG.warn("Something happened {} {} {}", x, y, z, t);
    else
      LOG.warn("Something happened {} {} {} {}", x, y, z, t.toString());
  }</pre>
                    </div>
                </div>
                <div class="quoteblock">
                    <blockquote>
                        <div class="admonitionblock tip">
                            <table>
                                <tr>
                                    <td class="icon">
                                        <i class="fa icon-tip" title="Tip"></i>
                                    </td>
                                    <td class="content">
                                        Be aware that <code>LOG.warn("Something happened", t)</code> is the same as
                                        <code>LOG.warn("Something happened {}", t)</code>, at least for the default
                                        jetty logging.
                                        In both cases, the full stacktrace is output. If you only want the log message,
                                        you need to do <code>LOG.warn("Something happened {}", t.toString())</code>.
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- ./end  #midcolumn -->
