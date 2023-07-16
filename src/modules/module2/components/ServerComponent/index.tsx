import { inject } from 'inversify';

import { Module2 } from '../../module';

import { Component2Server } from './server';

import { UiComponent } from '~/core/component';
import { Injectable } from '~/core/decorators';

@Injectable()
export class ServerComponent extends UiComponent {
  constructor(@inject(Module2) private readonly module: Module2) {
    super();
  }

  public view = Component2Server;
}
