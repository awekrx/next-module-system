import { ServerComponent } from './components';

import { Injectable } from '~/core/decorators';
import { UiModule } from '~/core/module';

@Injectable()
export class Module2 extends UiModule {
  actions = {
    summary: (x: number, y: number) => {
      return x + y;
    },
  };
  components = {
    ServerComponent,
  };
}
