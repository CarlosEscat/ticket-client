import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadEvents, loadUsers } from "../actions";
import EventList from "./EventList";

class EventListContainer extends React.Component {
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
    //console.log("current events: ", currentevents);
    return (
      <div>
        <p>Event List:</p>
        <EventList events={currentevents} />
        <br />
        <br />
        <br />
        <NavLink to="/event/addEvent">
          <label style={style}>Add New Events</label>
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = { loadEvents, loadUsers };

function mapStateToProps(state) {
  return {
    events: state.eventList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListContainer);
