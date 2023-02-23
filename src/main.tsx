import { Event, emit } from '$application/events'
import initialize from '$application/initialize'
import 'bootstrap/dist/css/bootstrap.min.css'

initialize()
  .then(() => emit(Event.INITIALIZED))
  .catch((error) => emit(Event.ERROR, error))
