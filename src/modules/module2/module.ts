import { Module } from '../../core/decorators';
import { UiModule } from '../../core/module';

import { Component2 } from './components';

@Module()
export class Module2 extends UiModule {
  public selectors = {
    test: () => {
      return;
    },
  };
  public components = {
    component2: Component2,
  };
}
