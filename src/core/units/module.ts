import { Class } from 'utility-types';

import { UiComponentConstructor } from './component';
import { UnitKey } from './enums';
import { UiPageConstructor } from './page';
import { WithKey } from './types';

export abstract class UiModule<
  Components extends Record<string, UiComponentConstructor> = Record<
    string,
    UiComponentConstructor
  >,
  Pages extends Record<string, UiComponentConstructor> = Record<
    string,
    UiPageConstructor
  >,
> {
  static readonly key = UnitKey.MODULE;

  public readonly components: Components = {} as Components;

  public readonly pages: Pages = {} as Pages;
}

export type UiModuleConstructor = WithKey<Class<UiModule>>;
