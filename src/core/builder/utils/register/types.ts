import { UiModuleConstructor } from '$/core/units/';

type Dependency = [{ key: 'inject'; value: UiModuleConstructor }];

export type ReflectDependency = Record<string, Dependency>;
