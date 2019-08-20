import { combineReducers } from "redux";
import userName from "./userName";
import eventList from "./eventList";
import ticketList from "./ticketList";

export default combineReducers({
  userName,
  eventList,
  ticketList
});
