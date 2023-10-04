/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {cp, readFile, writeFile} from 'fs/promises';
import {join, parse} from 'path';
import tinyGlob from 'tiny-glob';

// Glob(s) from which to copy story files
const storyDirectories = ['../*/demo'];
const dirPromises = storyDirectories.map(async (entry) => tinyGlob(entry));
const directories = (await Promise.all(dirPromises)).flat();

const parsedDirectories = directories.map(async (entry) => {
  // get the component name from the directory name
  const componentName = parse(parse(entry).dir).base;
  // set the destination to /catalog/stories/<component name>
  const destination = join('.', 'stories', componentName);

  console.log(`Copying ${entry} to ${destination}`);

  // recursively copy the files
  await cp(entry, destination, {recursive: true}, (err) => {
    if (err) throw err;
  });

  // Replace '~catalog/stories' with '.' in the import statements in all files in the destination
  const files = await tinyGlob(join(destination, '**/*.ts'));
    const filePromises = files.map(async (file) => {
      const contents = await readFile(file, 'utf8');
      await writeFile(file, contents.toString().replace(/~catalog\/stories/gm, '.'), 'utf8');
    });
    await Promise.all(filePromises);
});

await Promise.all(parsedDirectories);
