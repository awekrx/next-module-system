import { SerializedData } from '../types';

export type FetcherHeaders = {
  Accept?: string;
  'Content-Type'?: string;
  Authorization?: string;
  'User-Agent'?: string;
  'Content-Length'?: string;
  Cookie?: string;
  'Cache-Control'?: string;
  'If-Modified-Since'?: string;
  Location?: string;
  Referer?: string;
} & Record<string, string>;

export interface BaseFetcherOptions {
  queryParams?: SerializedData;
  headers?: FetcherHeaders;
  timeout?: number;
}

export interface FetcherPostOptions extends BaseFetcherOptions {
  data?: SerializedData;
}

export interface FetcherGetOptions extends BaseFetcherOptions {
  searchParams?: SerializedData;
}

export interface FetcherArguments {
  route: string;
  options?: FetcherGetOptions | FetcherPostOptions;
}

export enum FetchMethods {
  GET = 'get',
  POST = 'post',
}
