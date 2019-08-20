import { ALL_EVENTS } from "../actions";

export default function eventList(state = [], action = {}) {
  switch (action.type) {
    case ALL_EVENTS:
      return action.payload;
    default:
      return state;
  }
}
