import { StorageKey, StorageData } from '$types';
import { isString, keys } from 'lodash';


const observers = [];

const storage = {
  get(key) {
    const value = localStorage.getItem(key);
    try {
      return isString(value) ? JSON.parse(value) : value;
    } catch (_) {
      return value;
    }
  },

  set(key) {
    const value = isString(data) ? data : JSON.stringify(data);

    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  subscribe(key, hadler) {
    observers.push({ key, handler });
  },

  clear(omit) {
    for (const key of keys(StorageKey)) {
      if (!omit?.includes?.(key)) {
        storage.remove(key);
      }
    }
  },
};

window.addEventListener('storage', (event) => {
  if (event.storageArea === localStorage) {
    for (const { key, handler } of observers) {
      handler(storage.get(key));
    }
  }
});

export default storage;
