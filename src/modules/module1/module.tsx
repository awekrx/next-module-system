import { Module } from '../../core/decorators';
import { UiModule } from '../../core/module';

import { Component1 } from './components';

@Module()
export class Module1 extends UiModule {
  public selectors = {
    test: () => {
      return 1;
    },
  };
  public components = {
    component1: Component1,
  };
}
