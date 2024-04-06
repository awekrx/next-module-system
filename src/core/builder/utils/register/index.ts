import { Container } from 'inversify';

import {
  UiComponentConstructor,
  UiModule,
  UiModuleConstructor,
  UiPageConstructor,
} from '$units';

import { ReflectDependency } from './types';

// Bind metadata module for components
// Also registers for other dependencies (pages, etc)
export const register = (
  container: Container,
  units: (UiComponentConstructor | UiPageConstructor)[],
): void => {
  const processedModules = new Set<UiModuleConstructor>();

  units.forEach((unit) => {
    const dependencies = Reflect.getMetadata(
      'inversify:tagged',
      unit,
    ) as ReflectDependency;

    if (!dependencies) {
      return;
    }

    Object.entries(dependencies).forEach(([_key, dependency]) => {
      const Module = dependency[0].value;

      if (processedModules.has(Module)) {
        return;
      }

      const module = new Module();
      processedModules.add(Module);

      // Replace constructor with class object
      container.bind<UiModule>(Module).toConstantValue(module);
    });
  });
};
