import fs from 'fs';
import path from 'path';

export const getFolders = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);

  const modules = files.filter((fileName) => {
    const filePath = path.join(directoryPath, fileName);

    return fs.statSync(filePath).isDirectory();
  });

  return modules;
};
