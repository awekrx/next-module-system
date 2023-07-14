import { inject } from 'inversify';
import Link from 'next/link';

import { Page } from '../../core/decorators';
import { UiPage } from '../../core/page';
import { Module1 } from '../../modules';

import { Builder } from '~/core';

@Page()
export class Page1 extends UiPage {
  constructor(@inject(Module1) private readonly module: Module1) {
    super();
  }

  public view = () => {
    const component1 = Builder.renderComponent(
      this.module.components.component1
    );

    return (
      <div>
        <component1.view />
        <Link href="/page2">Page 2</Link>
      </div>
    );
  };
}
