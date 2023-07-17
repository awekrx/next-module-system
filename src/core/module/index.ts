import { UiComponentConstructor } from '../component';

import { Action, ModuleImports, Selector } from './types';

/**
 * Imports a specific part from a module into another module.
 *
 * @template Module - The type of the module to import from.
 * @template Entity - The type of the category within the module.
 * @template Key - The type of the key representing the specific part to import.
 * @param {ModuleConstructor} uiModuleConstructor - The module constructor to import from.
 * @param {Entity} moduleEntity - The category within the module.
 * @param {Key} entityKey - The key representing the specific part to import.
 * @returns `Module[Entity][Key]` - The imported part from the module.
 */
export const importFromOtherModule = <
  ModuleConstructor extends UiModuleConstructor,
  Entity extends ModuleImports,
  Key extends keyof InstanceType<ModuleConstructor>[Entity]
>(
  uiModuleConstructor: ModuleConstructor,
  moduleEntity: Entity,
  entityKey: Key
): InstanceType<ModuleConstructor>[Entity][Key] => {
  return new uiModuleConstructor()[moduleEntity][entityKey];
};

// Can add any fields to the module
export abstract class UiModule<
  Actions extends Record<string, Action> = Record<string, Action>,
  Imports extends Record<string, unknown> = Record<string, unknown>,
  Selectors extends Record<string, Selector> = Record<string, Selector>,
  Components extends Record<string, UiComponentConstructor> = Record<
    string,
    UiComponentConstructor
  >
> {
  static readonly key = 'Module';
  public readonly components: Components = {} as Components;
  public readonly actions: Actions = {} as Actions;
  public readonly imports: Imports = {} as Imports;
  public readonly selectors: Selectors = {} as Selectors;
}

export interface UiModuleConstructor {
  new (): UiModule;
}
