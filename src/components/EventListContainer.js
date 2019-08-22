import React from "react";
// import * as request from "superagent";
// import { url } from "../constants";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadEvents, loadUsers, allEvents } from "../actions";
import EventList from "./EventList";

class EventListContainer extends React.Component {
  onClick() {
    let offset = 0;
    offset = offset + 10;
    loadEvents(offset);
    console.log("eventList offset: ", offset);
  }

  render() {
    this.props.loadEvents();
    this.props.loadUsers();
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };
    var today = new Date();
    //console.log("testing date: ", today);
    const currentevents = this.props.events.filter(
      event => new Date(event.end_date) > today
    );

    let isVisible = false;
    const token = this.props.token;

    if (Object.keys(token).length !== 0) {
      isVisible = true;
    }

    return (
      <div>
        <p>Event List:</p>
        <div class="pagination">
          <button onClick={this.onClick}> &raquo; </button>
        </div>
        <EventList events={currentevents} />
        <br />
        <br />
        <br />
        {isVisible ? (
          <NavLink to="/event/addEvent">
            <label style={style}>Add New Events</label>
          </NavLink>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { loadEvents, loadUsers, allEvents };

function mapStateToProps(state) {
  return {
    events: state.eventList,
    token: state.userToken
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListContainer);
