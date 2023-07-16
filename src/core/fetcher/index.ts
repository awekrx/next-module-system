import { SerializedData } from '../types';

import { FetcherGetOptions, FetcherPostOptions } from './types';

export class Fetcher {
  private static instancesByUrl: Record<string, Fetcher> = {};

  constructor(private baseUrl: string) {
    if (Fetcher.instancesByUrl[baseUrl]) {
      return Fetcher.instancesByUrl[baseUrl];
    }

    Fetcher.instancesByUrl[baseUrl] = this;
  }

  private createRouteWithQueryParams(
    route: string,
    queryParams: SerializedData
  ): string {
    let routeWithQueryParams = route;

    Object.entries(queryParams).forEach(([name, value]) => {
      routeWithQueryParams = route.replace(`:${name}`, String(value));
    });

    return routeWithQueryParams;
  }

  private createRequestWithBody(
    url: URL,
    body: SerializedData,
    headers: SerializedData
  ): Request {
    const options: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    };

    return new Request(url, options);
  }

  private createRequestWithSearchParams(
    url: URL,
    searchParams: SerializedData,
    headers: SerializedData
  ): Request {
    Object.entries(searchParams).forEach(([name, value]) => {
      url.searchParams.set(name, String(value));
    });

    const options: RequestInit = {
      method: 'GET',
      ...headers,
    };

    return new Request(url, options);
  }

  private async sendRequest<ResponseType>(
    request: Request,
    timeout: number
  ): Promise<ResponseType> {
    let timeoutId: NodeJS.Timeout | undefined;

    if (timeout) {
      timeoutId = setTimeout(() => {
        throw new Error('Request timed out');
      }, timeout);
    }

    let response: Response;
    try {
      response = await fetch(request);
      clearTimeout(timeoutId);
    } catch {
      throw new Error('Failed to send request');
    }

    if (!response.ok) {
      throw new Error(
        `Request completed with an error: ${response.statusText}`
      );
    }

    return response.json();
  }

  async post<ResponseType>(
    route: string,
    options?: FetcherPostOptions
  ): Promise<ResponseType> {
    const data = { ...options?.data };
    const query = { ...options?.queryParams };
    const headers = { ...options?.headers };
    const timeout = options?.timeout || 0;

    const routeWithQueryParams = this.createRouteWithQueryParams(route, query);
    const url = new URL(routeWithQueryParams, this.baseUrl);

    const request = this.createRequestWithBody(url, data, headers);

    return this.sendRequest(request, timeout);
  }

  async get<ResponseType>(
    route: string,
    options?: FetcherGetOptions
  ): Promise<ResponseType> {
    const params = { ...options?.searchParams };
    const query = { ...options?.queryParams };
    const headers = { ...options?.headers };
    const timeout = options?.timeout ?? 0;

    const routeWithQueryParams = this.createRouteWithQueryParams(route, query);
    const url = new URL(routeWithQueryParams, this.baseUrl);

    const request = this.createRequestWithSearchParams(url, params, headers);

    return this.sendRequest(request, timeout);
  }
}
