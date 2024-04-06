import fs from 'fs';
import path from 'path';

import {
  APP_PATH,
  INDEX_FILE_NAME,
  MODULES_PATH,
  PAGES_FOLDER,
  ROOT_MODULE_NAME,
} from '../constants';
import { createPageContent } from './createPageContent';
import { getFiles } from './getFiles';
import { getFolders } from './getFolders';

type Args = {
  folders: string[];
  module?: string;
  submodules?: string[];
};

export const createRoutesTree = (args: Args) => {
  const { folders, module, submodules = [] } = args;

  folders.forEach((folderName) => {
    const folderPath = path.join(
      MODULES_PATH,
      module ? `${module}/${PAGES_FOLDER}` : folderName,
      module ? path.join(...submodules) : '',
      module ? folderName : PAGES_FOLDER,
    );

    const files = getFiles(folderPath);
    const moduleFolders = getFolders(folderPath);

    createRoutesTree({
      folders: moduleFolders,
      module: module ?? folderName,
      submodules: module ? [...submodules, folderName] : submodules,
    });

    const filesWithoutIndexFile = files.filter(
      (fileName) => fileName !== INDEX_FILE_NAME,
    );

    filesWithoutIndexFile.forEach((fileName) => {
      let routeModulePath = '';

      if (module) {
        routeModulePath = module === ROOT_MODULE_NAME ? '' : module;
      } else {
        routeModulePath = folderName === ROOT_MODULE_NAME ? '' : folderName;
      }

      const routeFolderPath = path.join(
        routeModulePath,
        module ? path.join(...submodules) : '',
        module ? folderName : '',
      );

      const routeContent = createPageContent(
        module ?? folderName,
        fileName,
        module ? [...submodules, folderName] : undefined,
      );

      try {
        fs.mkdirSync(path.join(APP_PATH, routeFolderPath), { recursive: true });
      } catch {
        // directory exists
      }

      fs.writeFileSync(
        path.join(APP_PATH, routeFolderPath, fileName),
        routeContent,
        { flag: 'w+' },
      );
    });
  });
};
