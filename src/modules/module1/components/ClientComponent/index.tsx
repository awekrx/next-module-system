import { inject } from 'inversify';

import { Module1 } from '../../module';

import { Component1Client } from './client';

import { UiComponent } from '~/core/component';
import { Injectable } from '~/core/decorators';

@Injectable()
export class ClientComponent extends UiComponent {
  constructor(@inject(Module1) private readonly module: Module1) {
    super();
  }

  public view = () => {
    // Import use demonstration
    // Only on server side
    const summary = this.module.imports.summaryFromModule2;
    const result = summary(2, 2);
    console.log(result);

    return <Component1Client />;
  };
}
