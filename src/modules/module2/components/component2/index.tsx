import { inject } from 'inversify';

import { UiComponent } from '../../../../core/component';
import { Injectable } from '../../../../core/decorators';
import { Module2 } from '../../module';

import { Component2Client } from './server';

@Injectable()
export class Component2 extends UiComponent {
  constructor(@inject(Module2) private readonly module: Module2) {
    super();
  }

  public view = Component2Client;
}
