import * as request from "superagent";
import { url } from "./constants";

export const JWT = "JWT";
export const NEW_NAME = "NEW_NAME";
export const ALL_EVENTS = "ALL_EVENTS";
export const ALL_TICKETS = "ALL_TICKETS";

function jwt(payload) {
  return {
    type: JWT,
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

export function newName(payload) {
  return {
    type: NEW_NAME,
    payload
  };
}

export function addEvent(name, description, logo, start_date, end_date) {
  return function(dispatch) {
    request
      .post(`${url}/event`)
      .send({ name, description, logo, start_date, end_date })
      .then(response => {
        const action = jwt(response.body);
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
        const action = jwt(response.body);
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
        const action = jwt(response.body);
        console.log(response.body);
        dispatch(action);
      })
      .catch(error => {
        console.log("Something went wrong adding a comment");
        console.log(error);
      });
  };
}

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return;

  request(`${url}/event`)
    .then(response => {
      //console.log("response.body test:", response.body.events);
      dispatch(allEvents(response.body.events));
    })
    .catch(console.error);
};

function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const loadTickets = () => (dispatch, getState) => {
  if (getState().tickets) return;

  request(`${url}/event/:eventId/tickets"`)
    .then(response => {
      //console.log("response.body test:", response.body.events);
      dispatch(allTickets(response.body.events));
    })
    .catch(console.error);
};
