import fs from 'fs';
import path from 'path';

export const getFiles = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);

  const modules = files.filter((fileName) => {
    const filePath = path.join(directoryPath, fileName);

    return fs.statSync(filePath).isFile();
  });

  return modules;
};
