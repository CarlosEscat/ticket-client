import React from "react";
import { Route } from "react-router-dom";
import ButtonListContainer from "./components/ButtonListContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginContainer from "./components/LoginContainer";
import AddEvent from "./components/AddEvent";
import EventListContainer from "./components/EventListContainer";
import TicketListContainer from "./components/TicketListContainer";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ticket App</h1>
        <ButtonListContainer />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/addEvent" component={AddEvent} />
        <Route
          exact
          path="/event/:eventId/tickets"
          component={TicketListContainer}
        />
      </div>
    );
  }
}
