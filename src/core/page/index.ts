import { FC } from 'react';

import { Injectable } from '../decorators';

@Injectable()
export abstract class UiPage<Props = object> {
  static readonly key = 'Page';

  public abstract view: FC<Props>;
}

export interface UiPageConstructor {
  // Most optimal solution
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any): UiPage;
}
