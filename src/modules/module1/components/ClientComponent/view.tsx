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
      <div>Client Component</div>
      <hr />
      <div>Counter: {count}</div>
      <div>
        <button onClick={onClickAdd}>+</button>
        <button onClick={onClickSubtract}>-</button>
      </div>
    </>
  );
};
