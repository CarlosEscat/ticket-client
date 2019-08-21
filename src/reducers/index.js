import { combineReducers } from "redux";
import userName from "./userName";
import eventList from "./eventList";
import ticketList from "./ticketList";
import commentList from "./commentList";

export default combineReducers({
  userName,
  eventList,
  ticketList,
  commentList
});
