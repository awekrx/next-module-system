import { FILE_EXTENSIONS_REGEX } from '../constants';

export const removeFileExtension = (path: string) => {
  return path.replace(FILE_EXTENSIONS_REGEX, '');
};
