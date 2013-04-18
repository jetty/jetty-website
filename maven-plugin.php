<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/app.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/nav.class.php");   require_once($_SERVER['DOCUMENT_ROOT'] . "/eclipse.org-common/system/menu.class.php");  $App    = new App();    $Nav    = new Nav();    $Menu   = new Menu();       include($App->getProjectCommon());    # All on the same line to unclutter the user's desktop'

    #
    # Begin: page-specific settings.  Change these. 
    $pageTitle      = "Jetty - Servlet Engine and Http Server";
    $pageKeywords   = "Jetty, Servlets, Async, SPDY, Web Server, Web Client, Eclipse RT, Eclipse Runtime";
    $pageAuthor     = "jmcconnell";
    
    # Add page-specific Nav bars here
    # Format is Link text, link URL (can be http://www.someothersite.com/), target (_self, _blank), level (1, 2 or 3)
    # $Nav->addNavSeparator("My Page Links",    "downloads.php");
    # $Nav->addCustomNav("My Link", "mypage.php", "_self", 3);
    # $Nav->addCustomNav("Google", "http://www.google.com/", "_blank", 3);

    # End: page-specific settings
    #
        
    # Paste your HTML content between the EOHTML markers!   
    $html = <<<EOHTML

    <div id="maincontent">
      <div id="midcolumn">
        <div class="section"><h2>Plugin Documentation<a name="Plugin_Documentation"></a></h2><a name="Plugin_Documentation"></a><p>Goals available for this plugin:</p><table border="0" class="bodyTable"><tr class="a"><th>Goal</th><th>Description</th></tr><tr class="b"><td><a href="deploy-war-mojo.html">jetty:deploy-war</a></td><td><p>This goal is used to run Jetty with a pre-assembled war.</p>
<p>It accepts exactly the same options as the <a
href="run-war-mojo.html">run-war</a> goal. However, it doesn't
assume that the current artifact is a webapp and doesn't try to
assemble it into a war before its execution. So using it makes
sense only when used in conjunction with the <a
href="run-war-mojo.html#webApp">webApp</a> configuration parameter
pointing to a pre-built WAR.</p>
<p>This goal is useful e.g. for launching a web app in Jetty as a
target for unit-tested HTTP client components.</p></td></tr><tr class="a"><td><a href="help-mojo.html">jetty:help</a></td><td>Display help information on jetty-maven-plugin.<br />
Call <code>mvn jetty:help -Ddetail=true
-Dgoal=&lt;goal-name&gt;</code> to display parameter details.</td></tr><tr class="b"><td><a href="run-mojo.html">jetty:run</a></td><td><p>This goal is used in-situ on a Maven project without first
requiring that the project is assembled into a war, saving time
during the development cycle. The plugin forks a parallel lifecycle
to ensure that the "compile" phase has been completed before
invoking Jetty. This means that you do not need to explicity
execute a "mvn compile" first. It also means that a "mvn clean
jetty:run" will ensure that a full fresh compile is done before
invoking Jetty.</p>
<p>Once invoked, the plugin can be configured to run continuously,
scanning for changes in the project and automatically performing a
hot redeploy when necessary. This allows the developer to
concentrate on coding changes to the project using their IDE of
choice and have those changes immediately and transparently
reflected in the running web container, eliminating development
time that is wasted on rebuilding, reassembling and
redeploying.</p>
<p>You may also specify the location of a jetty.xml file whose
contents will be applied before any plugin configuration. This can
be used, for example, to deploy a static webapp that is not part of
your maven build.</p>
<p>There is a <a href="run-mojo.html">reference guide</a> to the
configuration parameters for this plugin, and more detailed
information with examples in the <a
href="http://docs.codehaus.org/display/JETTY/Maven+Jetty+Plugin">Configuration
Guide</a>.</p></td></tr><tr class="a"><td><a href="run-exploded-mojo.html">jetty:run-exploded</a></td><td><p>This goal is used to assemble your webapp into an exploded war
and automatically deploy it to Jetty.</p>
<p>Once invoked, the plugin can be configured to run continuously,
scanning for changes in the pom.xml and to WEB-INF/web.xml,
WEB-INF/classes or WEB-INF/lib and hot redeploy when a change is
detected.</p>
<p>You may also specify the location of a jetty.xml file whose
contents will be applied before any plugin configuration. This can
be used, for example, to deploy a static webapp that is not part of
your maven build.</p>
<p>There is a <a href="run-exploded-mojo.html">reference guide</a>
to the configuration parameters for this plugin, and more detailed
information with examples in the <a
href="http://docs.codehaus.org/display/JETTY/Maven+Jetty+Plugin">Configuration
Guide</a>.</p></td></tr><tr class="b"><td><a href="run-forked-mojo.html">jetty:run-forked</a></td><td><p>This goal is used to assemble your webapp into a war and
automatically deploy it to Jetty in a forked JVM.</p>
<p>You need to define a jetty.xml file to configure connectors etc
and a context xml file that sets up anything special about your
webapp. This plugin will fill in the:</p>
<ul>
<li>context path</li>
<li>classes</li>
<li>web.xml</li>
<li>root of the webapp</li>
</ul>
Based on a combination of information that you supply and the
location of files in your unassembled webapp. <br />
<br />
 
<p>There is a <a href="run-war-mojo.html">reference guide</a> to
the configuration parameters for this plugin, and more detailed
information with examples in the <a
href="http://docs.codehaus.org/display/JETTY/Maven+Jetty+Plugin/">Configuration
Guide</a>.</p></td></tr><tr class="a"><td><a href="run-war-mojo.html">jetty:run-war</a></td><td><p>This goal is used to assemble your webapp into a war and
automatically deploy it to Jetty.</p>
<p>Once invoked, the plugin can be configured to run continuously,
scanning for changes in the project and to the war file and
automatically performing a hot redeploy when necessary.</p>
<p>You may also specify the location of a jetty.xml file whose
contents will be applied before any plugin configuration. This can
be used, for example, to deploy a static webapp that is not part of
your maven build.</p>
<p>There is a <a href="run-war-mojo.html">reference guide</a> to
the configuration parameters for this plugin, and more detailed
information with examples in the <a
href="http://docs.codehaus.org/display/JETTY/Maven+Jetty+Plugin/">Configuration
Guide</a>.</p></td></tr><tr class="b"><td><a href="start-mojo.html">jetty:start</a></td><td><p>This goal is similar to the jetty:run goal, EXCEPT that it is
designed to be bound to an execution inside your pom, rather than
being run from the command line.</p>
<p>When using it, be careful to ensure that you bind it to a phase
in which all necessary generated files and classes for the webapp
will have been created. If you run it from the command line, then
also ensure that all necessary generated files and classes for the
webapp already exist.</p></td></tr><tr class="a"><td><a href="stop-mojo.html">jetty:stop</a></td><td>JettyStopMojo - stops a running instance of jetty. The ff are
required: -DstopKey=someKey -DstopPort=somePort</td></tr></table><div class="section"><h3>System Requirements<a name="System_Requirements"></a></h3><a name="System_Requirements"></a><p>The following specifies the minimum requirements to run this Maven plugin:</p><table border="0" class="bodyTable"><tr class="a"><td>Maven</td><td>2.0</td></tr><tr class="b"><td>JDK</td><td>1.7</td></tr><tr class="a"><td>Memory</td><td>No minimum requirement.</td></tr><tr class="b"><td>Disk Space</td><td>No minimum requirement.</td></tr></table></div><div class="section"><h3>Usage<a name="Usage"></a></h3><a name="Usage"></a><p>You should specify the version in your project's plugin configuration:</p><div class="source"><pre>&lt;project&gt;
  ...
  &lt;build&gt;
    &lt;!-- To define the plugin version in your parent POM --&gt;
    &lt;pluginManagement&gt;
      &lt;plugins&gt;
        &lt;plugin&gt;
          &lt;groupId&gt;org.eclipse.jetty&lt;/groupId&gt;
          &lt;artifactId&gt;jetty-maven-plugin&lt;/artifactId&gt;
          &lt;version&gt;9.0.3-SNAPSHOT&lt;/version&gt;
        &lt;/plugin&gt;
        ...
      &lt;/plugins&gt;
    &lt;/pluginManagement&gt;
    &lt;!-- To use the plugin goals in your POM or parent POM --&gt;
    &lt;plugins&gt;
      &lt;plugin&gt;
        &lt;groupId&gt;org.eclipse.jetty&lt;/groupId&gt;
        &lt;artifactId&gt;jetty-maven-plugin&lt;/artifactId&gt;
        &lt;version&gt;9.0.3-SNAPSHOT&lt;/version&gt;
      &lt;/plugin&gt;
      ...
    &lt;/plugins&gt;
  &lt;/build&gt;
  ...
&lt;/project&gt;
</pre></div><p>For more information, see <a class="externalLink" href="http://maven.apache.org/guides/mini/guide-configuring-plugins.html">&quot;Guide to Configuring Plug-ins&quot;</a></p></div></div>

    </div>
    </div>
    <div id="rightcolumn">
        $sidebar        
    </div>

EOHTML;


    # Generate the web page
    $App->generatePage($theme, $Menu, $Nav, $pageAuthor, $pageKeywords, $pageTitle, $html);
?>
