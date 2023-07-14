import 'reflect-metadata';
import { injectable } from 'inversify';

export function Injectable(): ClassDecorator {
  // Only solution now, need more time to learn decorators
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any) => {
    injectable()(target);
  };
}
