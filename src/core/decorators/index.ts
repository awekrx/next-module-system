import 'reflect-metadata';
import { injectable } from 'inversify';

// This is not a complete solution, just a snippet
export function Page(): ClassDecorator {
  return (target: any) => {
    injectable()(target);
  };
}

// This is not a complete solution, just a snippet
export function Module(): ClassDecorator {
  return (target: any) => {
    injectable()(target);
  };
}

// This is not a complete solution, just a snippet
export function Component(): ClassDecorator {
  return (target: any) => {
    injectable()(target);
  };
}
