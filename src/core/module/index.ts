import { UiComponentConstructor } from '../component';

import { Action } from './types';

// Can add any fields to the module

export abstract class UiModule<
  Actions extends Record<string, Action> = Record<string, Action>,
  Imports extends Record<string, unknown> = Record<string, unknown>,
  Components extends Record<string, UiComponentConstructor> = Record<
    string,
    UiComponentConstructor
  >
> {
  static key = 'Module';
  public components: Components = {} as Components;
  public actions: Actions = {} as Actions;
  public imports: Imports = {} as Imports;
}

export interface UiModuleConstructor {
  new (): UiModule;
}
