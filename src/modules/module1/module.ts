import { Module2 } from '../module2';

import { ClientComponent } from './components';

import { Injectable } from '~/core/decorators';
import { UiModule, importFromOtherModule } from '~/core/module';

@Injectable()
export class Module1 extends UiModule {
  actions = {
    echo: (word: string) => {
      return word;
    },
  };
  components = {
    ClientComponent,
  };
  imports = {
    summaryFromModule2: importFromOtherModule(Module2, 'actions', 'summary'),
  };
}
