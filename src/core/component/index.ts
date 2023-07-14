import { FC } from 'react';

import { Component } from '../decorators';

@Component()
export abstract class UiComponent<Props = unknown> {
  static key = 'Component';

  public abstract view: FC<Props>;
}

export interface UiComponentConstructor {
  new (...args: any): UiComponent;
}
