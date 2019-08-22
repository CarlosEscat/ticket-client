import { ADD_TICKET } from "../actions";

export default function ticketUsed(state = {}, action = {}) {
  switch (action.type) {
    case ADD_TICKET:
      return action.payload;
    default:
      return state;
  }
}
