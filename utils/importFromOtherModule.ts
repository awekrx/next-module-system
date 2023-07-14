// import { UiModuleConstructor } from '../module';
// import { ModuleImports } from '../module/types';

// /**
//  * Imports a specific part from a module into another module.
//  *
//  * @template Module - The type of the module to import from.
//  * @template Entity - The type of the category within the module.
//  * @template Key - The type of the key representing the specific part to import.
//  * @param {Module} uiModuleConstructor - The module to import from.
//  * @param {Entity} moduleEntity - The category within the module.
//  * @param {Key} entityKey - The key representing the specific part to import.
//  * @returns {Module[Entity][Key]} The imported part from the module.
//  */
// export const importFromOtherModule = <
//   ModuleConstructor extends UiModuleConstructor,
//   Entity extends ModuleImports,
//   Key extends keyof InstanceType<ModuleConstructor>[Entity]
// >(
//   uiModuleConstructor: ModuleConstructor,
//   moduleEntity: Entity,
//   entityKey: Key
// ): InstanceType<ModuleConstructor>[Entity][Key] => {
//   return new uiModuleConstructor()[moduleEntity][entityKey];
// };
