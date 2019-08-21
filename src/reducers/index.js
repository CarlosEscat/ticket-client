import { combineReducers } from "redux";
import userlist from "./userList";
import eventList from "./eventList";
import ticketList from "./ticketList";
import commentList from "./commentList";

export default combineReducers({
  userlist,
  eventList,
  ticketList,
  commentList
});
