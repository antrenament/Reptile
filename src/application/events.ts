import { Event, EventHandlersSet, EventHandler, EventDataType } from '$types';

const events: Map<Event, Set<EventHandler<any>>> = new Map();

function emit<E extends Event>(event: E, data?: EventDataType<E>) {
  const handlers = events.get(event);

  if (handlers) {
    setTimeout(() => {
      for (const handler of handlers) {
        try {
          handler(data);
        } catch (error: any) {
          emit(Event.ERROR, error);
        }
      }
    }, 0);
  }
}

function on<E extends Event>(event: E, handler: EventHandler<E>) {
  let handlers: EventHandlersSet<E> | undefined = events.get(event);

  if (!handlers) {
    handlers = new Set();
    events.set(event, handlers);
  }

  handlers.add(handler);

  return () => off(event, handler);
}

function off<E extends Event>(event: E, handler?: EventHandler<E>) {
  if (handler) {
    events.get(event)?.delete(handler);
  } else {
    events.set(event, new Set());
  }
}

export { emit, on, off, Event };
