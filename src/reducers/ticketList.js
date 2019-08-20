import { ALL_TICKETS } from "../actions";

export default function ticketList(state = [], action = {}) {
  switch (action.type) {
    case ALL_TICKETS:
      return action.payload;
    default:
      return state;
  }
}
