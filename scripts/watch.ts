import clc from 'cli-color';
import fs from 'fs';

import { buildApp } from './buildApp';
import { MODULES_PATH } from './buildApp/constants';

fs.watch(MODULES_PATH, { recursive: true }, () => {
  console.log();
  console.log(clc.green(' ✓'), '[module-system] Rebuilding pages...');

  try {
    buildApp();
    console.log(clc.green(' ✓'), '[module-system] Done!');
  } catch (error) {
    console.log(clc.red.bold(error));
  }
});
