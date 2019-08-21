import { TICKET_COMMENTS } from "../actions";

export default function commentList(state = [], action = {}) {
  switch (action.type) {
    case TICKET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
