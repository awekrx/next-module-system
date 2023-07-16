import { FC } from 'react';

import { Page2 } from '.';

import { Builder } from '~/core/builder';

const Page2View: FC = () => {
  const page = Builder.getRenderedPage(Page2);

  return <page.view />;
};

export default Page2View;
