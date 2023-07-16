import { FC, JSX } from 'react';

interface Props {
  usersList: JSX.Element[];
}

export const Component2View: FC<Props> = (props) => {
  const { usersList } = props;

  return (
    <>
      <div>Server Component</div>
      <hr />
      <div>Server Rendering </div>
      <div>{usersList}</div>
    </>
  );
};
