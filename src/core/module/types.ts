export type Categories = 'selectors' | 'dispatchers';

// The only way, the type is automatically determined
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dispatcher<ApiArgs extends unknown[] = any> = () => (
  ...args: ApiArgs
) => void;

// The only way, the type is automatically determined
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Selector<Type = any> = () => Type;
