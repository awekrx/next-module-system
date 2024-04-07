import clc from 'cli-color';
import fs from 'fs';

import { APP_PATH, MODULES_PATH } from './constants';
import { createRoutesTree, getFolders } from './utils';

export const buildApp = () => {
  fs.rmSync(APP_PATH, { recursive: true, force: true });
  const folders = getFolders(MODULES_PATH);

  createRoutesTree({ folders });
};

try {
  buildApp();
  console.log(
    clc.green(' ✓'),
    '[module-system] Pages have been built successfully',
  );
} catch (error) {
  console.log(clc.red.bold(error));
}
