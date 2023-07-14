// Fields available to import
export type ModuleImports = 'actions';

// The only way for type checking
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action = (...args: any) => unknown;
