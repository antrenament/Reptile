import type Failed from '$application/Failed';
import { CompleteUser, User } from '$entities.types';

export { Failed };

export enum StorageKey {
  LOCATION = 'LOCATION',
  SESSION = 'SESSION',
  MAPPINGS = 'MAPPINGS',
  CLIPBOARD = 'CLIPBOARD',
  ACCOUNTS = 'ACCOUNTS',
  IS_LOCK = 'IS_LOCK',
  LAST_LOGIN_DATE = 'LAST_LOGIN_DATE',
  SETTINGS = 'SETTINGS',
  HIDE_RULES_MODAL = 'HIDE_RULES_MODAL',
}
export enum State {
  LOCKED = 'LOCKED',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type EventHandlersSet<E extends Event> = Set<EventHandler<E>>;
export type EventHandler<E extends Event> = (
  data: EventData[E]
) => void | Promise<void>;

export enum Event {
  ERROR = 'ERROR',
  REGISTER = 'REGISTER',
  INITIALIZED = 'INITIALIZED',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  LOCATION = 'LOCATION',
  USER = 'USER',
  SERVER = 'SERVER',
  NOTIFICATION = 'NOTIFICATION',
}

export type EventDataType<E extends Event> = EventData[E];

export interface EventData {
  [Event.ERROR]: Error | Failed;
  [Event.INITIALIZED]: Store;
  [Event.LOGIN]: AuthToken;
  [Event.LOGOUT]: void;
  [Event.USER]: UserMe;
  [Event.LOCATION]: string;
  [Event.SERVER]: Record<string, any>;
  [Event.NOTIFICATION]: Record<string, any>;
}

export interface Store {
  channels: Record<string, string>;
  state: State;
  lockDelay: number;
  url: string;
  tenant: string;
  mappingsUpdatedAt: string;
  user: AuthSession | null;
}

export type AuthTokenReply = User;

export type AuthSession = CompleteUser & {
  expiresAt: string;
};

export interface Account {
  shortName: string;
  thumb: string;
  email: string;
  name: string;
  lastPinLogin: string;
  lastEmailLogin: string;
  lastRoute: string;
}

export interface Accounts {
  [key: string]: Partial<Account>;
}

export interface StorageData {
  [StorageKey.SESSION]: AuthSession;
  [StorageKey.MAPPINGS]: Mappings;
  [StorageKey.LOCATION]: string;
  [StorageKey.CLIPBOARD]: Record<string, any>;
}
