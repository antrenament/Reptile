import { StorageKey, StorageData } from '$types';
import { isString, keys } from 'lodash';

interface Observer<T extends keyof typeof StorageKey> {
  key: T;
  handler(data: StorageData[T] | null): void;
}

const observers: Observer<StorageKey>[] = [];

const storage = {
  get<T extends StorageKey>(key: T): StorageData[T] | null {
    const value = localStorage.getItem(key);
    try {
      return isString(value) ? JSON.parse(value) : value;
    } catch (_) {
      return value as StorageData[T] | null;
    }
  },

  set<T extends StorageKey>(key: T, data: StorageData[T]): void {
    const value = isString(data) ? data : JSON.stringify(data);

    localStorage.setItem(key, value);
  },

  remove<T extends StorageKey>(key: T) {
    localStorage.removeItem(key);
  },

  subscribe<T extends StorageKey>(key: T, handler: Observer<T>['handler']) {
    observers.push({ key, handler });
  },

  clear(omit?: string[]) {
    for (const key of keys(StorageKey)) {
      if (!omit?.includes?.(key)) {
        storage.remove(key as StorageKey);
      }
    }
  },
};

window.addEventListener('storage', (event: any) => {
  if (event.storageArea === localStorage) {
    for (const { key, handler } of observers) {
      handler(storage.get(key));
    }
  }
});

export default storage;
