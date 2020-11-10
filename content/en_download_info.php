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
        <table>
            <thead>
            <tr>
                <th>Version</th>
                <th>Metadata</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach ($jetty as $row): array_map('htmlentities', $row); ?>
                <tr>
                    <td><?php print $row['version'];?></td>
                    <td>
                        <b>zip.mp5</b> <?php print $row['zip.md5']; ?><br/>
                        <b>tgz.md5</b> <?php print $row['tgz.md5']; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
            </tbody>
        </table>
    <?php endif; ?>
</div>
