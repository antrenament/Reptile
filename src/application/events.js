import { Event, EventHandlersSet, EventHandler, EventDataType } from '$types';

const events = new Map();

function emit(event) {
  const handlers = events.get(event);

  if (handlers) {
    setTimeout(() => {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch (error) {
          emit(Event.ERROR, error);
        }
      }
    }, 0);
  }
}

function on(event) {
  let handlers = events.get(event);

  if (!handlers) {
    handlers = new Set();
    events.set(event, handlers);
  }

  handlers.add(handler);

  return () => off(event, handler);
}

function off(event) {
  if (handler) {
    events.get(event)?.delete(handler);
  } else {
    events.set(event, new Set());
  }
}

export { emit, on, off, Event };
