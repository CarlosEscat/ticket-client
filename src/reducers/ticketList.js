import { EVENT_TICKETS } from "../actions";

export default function ticketList(state = [], action = {}) {
  switch (action.type) {
    case EVENT_TICKETS:
      return action.payload;
    default:
      return state;
  }
}
