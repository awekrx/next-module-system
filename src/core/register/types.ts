import { UiModuleConstructor } from '../module';

export type ReflectDependency = Record<
  string,
  [{ key: 'inject'; value: UiModuleConstructor }]
>;
