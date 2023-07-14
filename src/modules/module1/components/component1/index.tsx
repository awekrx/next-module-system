import { inject } from 'inversify';

import { UiComponent } from '../../../../core/component';
import { Injectable } from '../../../../core/decorators';
import { Module1 } from '../../index';

import { Component1Client } from './client';

@Injectable()
export class Component1 extends UiComponent {
  constructor(@inject(Module1) private readonly module: Module1) {
    super();

    // Import use demonstration
    // const result = this.module.imports.summaryFromModule2(2, 3);
    // console.log(result);
  }

  public view = Component1Client;
}
