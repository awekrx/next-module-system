// Fields available to import
export type ModuleImports = 'actions' | 'selectors';

// The only way for type checking
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = (...args: any) => unknown;

// The only way, the type is automatically determined
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Selector<Type = any> = () => Type;
