import { ALL_USERS } from "../actions";

export default function userList(state = [], action = {}) {
  switch (action.type) {
    case ALL_USERS:
      return action.payload;
    default:
      return state;
  }
}
