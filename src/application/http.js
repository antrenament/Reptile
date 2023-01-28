import qs from 'qs';
import toFailedValidation from '$utils/toFailedValidation';
import Failed from '$application/Failed';
import { emit, Event } from '$application/events';
import store from '$application/store';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const REQUEST = async (method: HttpMethod, path: string, data?: any) => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = path.includes('://') ? path : `${store.get('url')}${path}`;
  const body = data ? JSON.stringify(data) : undefined;
  const response = await fetch(url, { method, headers, body });

  if ([200, 201].includes(response.status)) {
    return await response.json();
  }

  if (response.status === 204) {
    return null;
  }

  if (response.status === 400) {
    throw toFailedValidation(await response.json());
  }

  if (response.status === 401) {
    return emit(Event.LOGOUT);
  }

  if (response.status === 404) {
    return;
  }

  if (response.status === 422) {
    throw toFailedValidation(await response.json());
  }

  if (response.status === 500) {
    throw new Failed({
      type: 'server',
      message: await response.text(),
      code: response.status,
      meta: response,
    });
  }
};

export const GET = async (path: string, query?: Record<string, any>) => {
  path = query ? `${path}?${qs.stringify(query)}` : path;

  return await REQUEST('GET', path);
};

export const POST = async (path: string, data: Record<string, any>) => {
  return await REQUEST('POST', path, data);
};

export const PUT = async (path: string, data: Record<string, any>) => {
  return await REQUEST('PUT', path, data);
};

export const PATCH = async (path: string, data: Record<string, any>) => {
  return await REQUEST('PATCH', path, data);
};

export const DELETE = async (path: string, data?: Record<string, any>) => {
  return await REQUEST('DELETE', path, data || {});
};
