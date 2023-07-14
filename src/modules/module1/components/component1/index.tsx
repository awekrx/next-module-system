import { inject } from 'inversify';

import { UiComponent } from '../../../../core/component';
import { Component } from '../../../../core/decorators';
import { Module1 } from '../../module';

import { Component1Client } from './client';

@Component()
export class Component1 extends UiComponent {
  constructor(@inject(Module1) private readonly module: Module1) {
    super();
  }

  public view = Component1Client;
}
