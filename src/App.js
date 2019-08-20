import React from "react";
import { Route } from "react-router-dom";
import ButtonListContainer from "./components/ButtonListContainer";
import SignUpContainer from "./components/SignUpContainer";
import LoginContainer from "./components/LoginContainer";
import AddEvent from "./components/AddEvent";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ticket App</h1>
        <ButtonListContainer />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/event" component={AddEvent} />
      </div>
    );
  }
}
