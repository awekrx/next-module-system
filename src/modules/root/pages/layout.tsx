import { FC, PropsWithChildren } from 'react';

import { Injectable } from '$core/decorators';
import { UiPage } from '$units';

@Injectable()
export class RootLayout extends UiPage<PropsWithChildren> {
  constructor() {
    super();
  }

  View: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  };
}

export default RootLayout;
