import * as request from "superagent";
import { url } from "./constants";

export const JWT = "JWT";
export const NEW_NAME = "NEW_NAME";

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
