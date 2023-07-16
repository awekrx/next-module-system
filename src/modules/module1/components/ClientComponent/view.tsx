import { FC, MouseEventHandler } from 'react';

type OnClickButton = MouseEventHandler<HTMLButtonElement>;

interface Props {
  count: number;
  onClickAdd: OnClickButton;
  onClickSubtract: OnClickButton;
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
