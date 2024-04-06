import clc from 'cli-color';

import { MODULES_PATH } from './constants';
import { createRoutesTree, getFolders } from './utils';

export const buildApp = () => {
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
