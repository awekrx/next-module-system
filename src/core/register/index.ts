import { Container } from 'inversify';

import { UiComponentConstructor } from '../component';
import { UiModule } from '../module';

import { ReflectDependency } from './types';

// Bind metadata module for components
// Also registers for other dependencies (pages, etc)
export const register = (
  container: Container,
  components: UiComponentConstructor[]
): void => {
  components.forEach((component) => {
    const dependencies: ReflectDependency = Reflect.getMetadata(
      'inversify:tagged',
      component
    );

    if (dependencies) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(dependencies).forEach(([_key, dependency]) => {
        const Module = dependency[0].value;
        const module = new Module();

        // Replace constructor with class object
        container.bind<UiModule>(Module).toConstantValue(module);
      });
    }
  });
};
