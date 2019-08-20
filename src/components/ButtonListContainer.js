import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ButtonListContainer extends Component {
  render() {
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };
    return (
      <div style={{ flexDirection: "row" }}>
        <NavLink to="/signup">
          <label style={style}>Sign Up</label>
        </NavLink>
        <NavLink to="/login">
          <label style={style}>Log In</label>
        </NavLink>
        <NavLink to="/event">
          <label style={style}>Events</label>
        </NavLink>
        <NavLink to="/start">
          <label style={style}>User</label>
        </NavLink>
      </div>
    );
  }
}
