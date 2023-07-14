'use client';

import { FC, useState } from 'react';

export const Component1Client: FC<unknown> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Component 1</div>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  );
};
