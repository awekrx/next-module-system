import { FC } from 'react';

import { User } from './types';
import { Component2View } from './view';

import { config } from '~/config';
import { Fetcher } from '~/core/fetcher';

const fetcher = new Fetcher(config.apiUrl);

export const Component2Server: FC = async () => {
  const users: User[] = await fetcher.get('/users');
  const usersList = users.map((user) => {
    return (
      <div key={user.name}>
        {user.name} - {user.username}
      </div>
    );
  });

  return <Component2View usersList={usersList}></Component2View>;
};
