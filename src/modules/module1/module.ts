import { Injectable } from '../../core/decorators';
import { UiModule } from '../../core/module';
// import { importFromOtherModule } from '../../core/utils';
// import { Module2 } from '../module2';

import { Component1 } from './components';

@Injectable()
export class Module1 extends UiModule {
  // actions = {
  //   echo: (word: string) => {
  //     return word;
  //   },
  // };
  components = {
    component1: Component1,
  };
  // imports = {
  //   // summaryFromModule2: importFromOtherModule(Module2, 'actions', 'summary'),
  // };
}
