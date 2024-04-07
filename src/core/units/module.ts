import { Class } from 'utility-types';

import { UiComponentConstructor } from './component';
import { UnitKey } from './enums';
import { WithKey } from './types';

export abstract class UiModule<
  Components extends Record<string, UiComponentConstructor> = Record<
    string,
    UiComponentConstructor
  >,
> {
  static readonly key = UnitKey.MODULE;

  public readonly components: Components = {} as Components;
}

export type UiModuleConstructor = WithKey<Class<UiModule>>;
