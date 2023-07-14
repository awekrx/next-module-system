import { inject } from 'inversify';

import { UiComponent } from '../../../../core/component';
import { Component } from '../../../../core/decorators';
import { Module2 } from '../../module';

@Component()
export class Component2 extends UiComponent {
  constructor(@inject(Module2) private readonly module: Module2) {
    super();
  }

  public view = () => {
    return <div>Component 2</div>;
  };
}
