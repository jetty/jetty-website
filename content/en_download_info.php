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
    <h1><?php print $pageTitle;?></h1>

    <?php if (count($jetty) > 0): ?>
        <table class="frame-all grid-all stretch">
            <colgroup>
                <col style="width: 30%;">
                <col style="width: 70%;">
            </colgroup>
            <thead>
            <tr>
                <th class="tableblock halign-left valign-top">Version</th>
                <th class="tableblock halign-left valign-top">Metadata</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($jetty as $row): array_map('htmlentities', $row); ?>
                <tr>
                    <td class="tableblock halign-left valign-top"><?php print $row['version'];?></td>
                    <td class="tableblock halign-left valign-top">
                        <p class="tableblock">
                            <b>zip.mp5</b> <?php print $row['zip.md5']; ?><br/>
                            <b>zip.sha1</b> <?php print $row['zip.sha1']; ?><br/>
                            <b>tgz.md5</b> <?php print $row['tgz.md5']; ?><br/>
                            <b>tgz.sha1</b> <?php print $row['tgz.sha1']; ?>
                        </p>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
