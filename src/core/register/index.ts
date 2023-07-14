import { Container } from 'inversify';

import { UiComponentConstructor } from '../component';
import { UiModule } from '../module';

import { ReflectDependency } from './types';

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

        container.bind<UiModule>(Module).toConstantValue(module);
      });
    }
  });
};
