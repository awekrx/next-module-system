import { FC } from 'react';

import { Page1 } from '.';

import { Builder } from '~/core';

const Page1View: FC = () => {
  const page = Builder.renderPage(Page1);

  return <page.view />;
};

export default Page1View;
