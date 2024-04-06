import { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';
import { Class } from 'utility-types';

import { Injectable } from '../decorators';
import { UnitKey } from './enums';
import { WithKey } from './types';

@Injectable()
export abstract class UiPage<
  Props extends PropsWithChildren = PropsWithChildren,
> {
  static readonly key = UnitKey.PAGE;

  public abstract View: FC<Props>;

  public metadata: Metadata = {};
}

export type UiPageConstructor = WithKey<Class<UiPage>>;
