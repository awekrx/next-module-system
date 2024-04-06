import { FC, PropsWithChildren } from 'react';
import { Class } from 'utility-types';

import { Injectable } from '../decorators';
import { UnitKey } from './enums';
import { WithKey } from './types';

@Injectable()
export abstract class UiComponent<
  Props extends PropsWithChildren = PropsWithChildren,
> {
  static readonly key = UnitKey.COMPONENT;

  public abstract View: FC<Props>;
}

export type UiComponentConstructor = WithKey<Class<UiComponent>>;
