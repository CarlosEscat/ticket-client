import { combineReducers } from "redux";
import userlist from "./userList";
import eventList from "./eventList";
import ticketList from "./ticketList";
import commentList from "./commentList";
import userToken from "./userToken";
import userIn from "./userIn";
import eventAdded from "./eventAdded";
import ticketUsed from "./ticketUsed";

export default combineReducers({
  userlist,
  eventList,
  ticketList,
  commentList,
  userToken,
  userIn,
  eventAdded,
  ticketUsed
});
