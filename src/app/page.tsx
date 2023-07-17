import Link from 'next/link';
import { FC } from 'react';

const Main: FC = () => {
  return (
    <>
      <div>
        <Link href="/page1">Page 1</Link>
      </div>
      <div>
        <Link href="/page2">Page 2</Link>
      </div>
    </>
  );
};

export default Main;
