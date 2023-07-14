import { FC, MouseEventHandler } from 'react';

interface Props {
  count: number;
  onClickAdd: MouseEventHandler<HTMLButtonElement>;
  onClickSubtract: MouseEventHandler<HTMLButtonElement>;
}

export const Component1View: FC<Props> = (props) => {
  const { count, onClickAdd, onClickSubtract } = props;

  return (
    <>
      <div>Component 1</div>
      <div>Counter: {count}</div>
      <div>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSubtract}>-</button>
      </div>
    </>
  );
};
