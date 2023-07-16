import { FC } from 'react';

import { Page1 } from '.';

import { Builder } from '~/core/builder';

const Page1View: FC = () => {
  const page = Builder.getRenderedPage(Page1);

  return <page.view />;
};

export default Page1View;
