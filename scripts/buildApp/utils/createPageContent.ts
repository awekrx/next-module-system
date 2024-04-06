import path from 'path';

import { removeFileExtension } from './removeFileExtension';

export const createPageContent = (
  module: string,
  page: string,
  submodules?: string[],
) => {
  const submodulesPath = submodules ? `${path.join(...submodules)}/` : '';

  let content = '';
  content += "import { FC } from 'react';\n";
  content += '\n';
  content += "import { render } from '$core';\n";
  content += `import Page from '$modules/${module}/pages/${submodulesPath}${removeFileExtension(page)}';\n`;
  content += '\n';
  content += 'const { View, metadata } = render(Page);\n';
  content += '\n';
  content += 'export { metadata };\n';
  content += '\n';
  content += 'export default View as FC;\n';

  return content;
};
