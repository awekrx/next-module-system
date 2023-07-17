import 'reflect-metadata';
import { injectable } from 'inversify';

export function Injectable(): ClassDecorator {
  // Ability to change functionality
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any) => {
    injectable()(target);
  };
}
