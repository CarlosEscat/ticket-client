import { ADD_EVENT } from "../actions";

export default function eventAdded(state = {}, action = {}) {
  switch (action.type) {
    case ADD_EVENT:
      return action.payload;
    default:
      return state;
  }
}
