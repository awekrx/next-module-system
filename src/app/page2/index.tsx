import { inject } from 'inversify';
import Link from 'next/link';

import { Builder } from '~/core/builder';
import { Injectable } from '~/core/decorators';
import { UiPage } from '~/core/page';
import { Module2 } from '~/modules';

@Injectable()
export class Page2 extends UiPage {
  constructor(@inject(Module2) private readonly module: Module2) {
    super();
  }

  public view = () => {
    const ServerComponent = Builder.getRenderedComponent(
      this.module.components.ServerComponent
    );

    return (
      <div>
        <ServerComponent.view />
        <hr />
        <Link href="/page1">Page 1</Link>
      </div>
    );
  };
}
