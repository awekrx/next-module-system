'use client';

import { FC } from 'react';

import { Page2 } from '.';

import { Builder } from '~/core';

const Page2View: FC = () => {
  const page = Builder.renderPage(Page2);

  return <page.view />;
};

export default Page2View;
