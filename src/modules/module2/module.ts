import { Injectable } from '../../core/decorators';
import { UiModule } from '../../core/module';

import { Component2 } from './components';

@Injectable()
export class Module2 extends UiModule {
  actions = {
    summary: (x: number, y: number) => {
      return x + y;
    },
  };
  components = {
    component2: Component2,
  };
}
