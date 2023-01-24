import { get as $get, set as $set, merge } from 'lodash';
import create from 'zustand';

const zustand = create<any>(() => ({
  state: 'public',
  user: null,
  lockDelay: 1000 * 60 * 10, // 10 min
  url: 'http://localhost:3000',
  tenant: '',
  mappingsUpdatedAt: new Date().toISOString(),
  channels: {},
  theme: 'dark',
  showNotification: false,
}));

// reactive store to be used in react
export function useStore() {
  zustand(); // this triggers useState internally

  return store;
}

export const store = {
  get data() {
    return zustand.getState();
  },

  is(key: any, value: any) {
    const storeValue = zustand((state: any) => state[key]);

    return storeValue === value;
  },

  has(key: string) {
    return this.get(key) !== undefined;
  },

  value<U extends any>(key: U): any[U] {
    return zustand((state: any) => state[key]);
  },

  get(key: string): any {
    return $get(zustand.getState(), key);
  },

  set(key: string, value: any): void {
    zustand.setState({ ...$set(zustand.getState(), key, value) });
  },

  update(data: Partial<any>): void {
    const current = zustand.getState();
    const updated = merge(current, data);
    zustand.setState(updated);
  },
};

export default store;
