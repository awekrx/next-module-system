import { FC } from 'react';

import { Injectable } from '../decorators';

@Injectable()
export abstract class UiComponent<Props = unknown> {
  static readonly key = 'Component';

  public abstract view: FC<Props>;
}

export interface UiComponentConstructor {
  // Most optimal solution
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any): UiComponent;
}
