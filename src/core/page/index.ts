import { FC } from 'react';

import { Page } from '../decorators';

@Page()
export abstract class UiPage<Props = unknown> {
  static key = 'Page';

  public abstract view: FC<Props>;
}

export interface UiPageConstructor {
  new (...args: any): UiPage;
}
