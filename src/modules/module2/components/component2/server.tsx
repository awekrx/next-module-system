'use client';

import { FC, useState } from 'react';

import { Component2View } from './view';

// FC<unknown> is required
export const Component2Client: FC<unknown> = () => {
  const [count, setCount] = useState(0);

  const onClickAddHandler = () => setCount(count + 1);
  const onClickSubtractHandler = () => setCount(count - 1);

  return (
    <Component2View
      onClickAdd={onClickAddHandler}
      onClickSubtract={onClickSubtractHandler}
      count={count}
    ></Component2View>
  );
};
