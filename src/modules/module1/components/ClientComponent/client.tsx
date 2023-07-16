'use client';

import { FC, useState } from 'react';

import { Component1View } from './view';

export const Component1Client: FC = () => {
  const [count, setCount] = useState(0);

  const onClickAddHandler = () => setCount(count + 1);
  const onClickSubtractHandler = () => setCount(count - 1);

  return (
    <Component1View
      onClickAdd={onClickAddHandler}
      onClickSubtract={onClickSubtractHandler}
      count={count}
    ></Component1View>
  );
};
