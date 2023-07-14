import { UiComponentConstructor } from '../component';

import { Dispatcher, Selector } from './types';

export interface UiModuleShape<
  Dispatchers extends Record<string, Dispatcher>,
  Selectors extends Record<string, Selector>,
  Imports extends Record<string, unknown>,
  Components extends Record<string, UiComponentConstructor>
> {
  components?: Components;
  dispatchers?: Dispatchers;
  selectors?: Selectors;
  imports?: Imports;
}

export abstract class UiModule<
  Dispatchers extends Record<string, Dispatcher> = Record<string, Dispatcher>,
  Selectors extends Record<string, Selector> = Record<string, Selector>,
  Imports extends Record<string, unknown> = Record<string, unknown>,
  Components extends Record<string, UiComponentConstructor> = Record<
    string,
    UiComponentConstructor
  >
> implements UiModuleShape<Dispatchers, Selectors, Imports, Components>
{
  static key = 'Module';
  public components: Components = {} as Components;
  public dispatchers: Dispatchers = {} as Dispatchers;
  public selectors: Selectors = {} as Selectors;
  public imports: Imports = {} as Imports;
}

export interface UiModuleConstructor {
  new (): UiModule;
}
