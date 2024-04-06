import { Injectable } from '$core/decorators';
import { UiPage } from '$units';

@Injectable()
export class RootPage extends UiPage {
  constructor() {
    super();
  }

  View = () => {
    return <div>Next module system</div>;
  };
}

export default RootPage;
