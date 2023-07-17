import { inject } from 'inversify';
import Link from 'next/link';

import { Builder } from '~/core/builder';
import { Injectable } from '~/core/decorators';
import { UiPage } from '~/core/page';
import { Module1 } from '~/modules';

@Injectable()
export class Page1 extends UiPage {
  constructor(@inject(Module1) private readonly module: Module1) {
    super();
  }

  public view = () => {
    const ClientComponent = Builder.getRenderedComponent(
      this.module.components.ClientComponent
    );

    return (
      <div>
        <ClientComponent.view />
        <hr />
        <Link href="/page2">Page 2</Link>
      </div>
    );
  };
}
