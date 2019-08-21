import React from "react";
import { Route, NavLink } from "react-router-dom";
import ButtonListContainer from "./components/ButtonListContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginContainer from "./components/LoginContainer";
import AddEvent from "./components/AddEvent";
import AddTicket from "./components/AddTicket";
import EventListContainer from "./components/EventListContainer";
import TicketListContainer from "./components/TicketListContainer";
import TicketContainer from "./components/TicketContainer";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/">
          <h1>Ticket App</h1>
        </NavLink>
        <ButtonListContainer />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/addEvent" component={AddEvent} />
        <Route exact path="/event/:eventId/addTicket" component={AddTicket} />
        <Route
          exact
          path="/event/:eventId/tickets"
          component={TicketListContainer}
        />
        <Route exact path="/tickets/:ticketId" component={TicketContainer} />
      </div>
    );
  }
}
