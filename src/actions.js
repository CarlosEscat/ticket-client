import * as request from "superagent";
import { url } from "./constants";

export const JWT = "JWT";
export const ADD_USER = "ADD_USER";
export const ADD_EVENT = "ADD_EVENT";
export const ADD_TICKET = "ADD_TICKET";
export const ALL_USERS = "ALL_USERS";
export const ALL_EVENTS = "ALL_EVENTS";
export const EVENT_TICKETS = "EVENT_TICKETS";
export const TICKET_COMMENTS = "TICKET_COMMENTS";
export const TICKET_EDIT = "TICKET_EDIT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}

export function login(name, password) {
  return function(dispatch) {
    request
      .post(`${url}/login`)
      .send({ name, password })
      .then(response => {
        const action = jwt(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something is wrong with the log in");
        console.log(error);
      });
  };
}

export function allUsers(payload) {
  return {
    type: ALL_USERS,
    payload
  };
}

export const loadUsers = () => (dispatch, getState) => {
  if (getState().users) return;

  request(`${url}/user`)
    .then(response => {
      //console.log("response.body test:", response.body.events);
      dispatch(allUsers(response.body.users));
    })
    .catch(console.error);
};

// export function addEvent(name, description, logo, start_date, end_date) {
//   return request
//     .post(`${url}/event`)
//     .send({ name, description, logo, start_date, end_date })
//     .then(response => {
//       console.log("event added successfully", response.body);
//     })
//     .catch(error => {
//       console.log("Something went wrong adding event");
//       console.log(error);
//     });
// }

function newEvent(payload) {
  return {
    type: ADD_EVENT,
    payload
  };
}

export function addEvent(jwt, data) {
  return function(dispatch) {
    request
      .post(`${url}/event`)
      .send({ jwt, data })
      .then(response => {
        const action = newEvent(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something went wrong adding event");
        console.log(error);
      });
  };
}

export function createTicket(price, description, picture, eventId, userId) {
  return function(dispatch) {
    request
      .post(`${url}/ticket`)
      .send({ price, description, picture, eventId, userId })
      .then(response => {
        const action = newEvent(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something went wrong adding a ticket");
        console.log(error);
      });
  };
}

export function addComment(name, text, ticketId) {
  return function(dispatch) {
    request
      .post(`${url}/comment`)
      .send({ name, text, ticketId })
      .then(response => {
        const action = newEvent(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something went wrong adding a comment");
        console.log(error);
      });
  };
}

export function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const loadEvents = offset => (dispatch, getState) => {
  if (getState().events) return;
  //console.log("offset: ", offset);
  if (offset === undefined) {
    offset = 0;
  } else {
    offset = offset.toString();
  }

  request(`${url}/event?offset=${offset}`)
    .then(response => {
      //console.log("response.body test:", response.body.events);
      dispatch(allEvents(response.body.events));
    })
    .catch(console.error);
};

function eventTickets(payload) {
  return {
    type: EVENT_TICKETS,
    payload
  };
}

export const loadTickets = event => (dispatch, getState) => {
  if (getState().tickets) return;

  request(`${url}/event/${event}/tickets`)
    .then(response => {
      //console.log("response.body test:", response.body);
      dispatch(eventTickets(response.body));
    })
    .catch(console.error);
};

function ticketComments(payload) {
  return {
    type: TICKET_COMMENTS,
    payload
  };
}

export const loadComments = ticket => (dispatch, getState) => {
  if (getState().comments) return;

  request(`${url}/ticket/${ticket}/comments`)
    .then(response => {
      //console.log("response.body test:", response.body);
      dispatch(ticketComments(response.body));
    })
    .catch(console.error);
};

const ticketEdit = ticket => ({
  type: TICKET_EDIT,
  ticket
});

export const updateTicket = (id, data, jwt) => dispatch => {
  request
    .put(`${url}/ticket/${id}`)
    .send({ jwt, data })
    .then(response => {
      dispatch(ticketEdit(response.body));
    })
    .catch(console.error);
};

export function addTicket(payload) {
  return {
    type: ADD_TICKET,
    payload
  };
}
