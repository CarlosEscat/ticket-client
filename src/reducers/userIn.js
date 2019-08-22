import { ADD_USER } from "../actions";

export default function userIn(state = {}, action = {}) {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    default:
      return state;
  }
}
