import { inject } from 'inversify';
import Link from 'next/link';

import { Page } from '../../core/decorators';
import { UiPage } from '../../core/page';
import { Module1 } from '../../modules';

@Page()
export class Page2 extends UiPage {
  public title = 'Page2';
  public route = '/page2';

  constructor(@inject(Module1) private readonly module: Module1) {
    super();
  }

  public view = () => {
    return (
      <div>
        <Link href="/page1">Page 1</Link>
      </div>
    );
  };
}
