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

    return (
      <div>
        <p>Event List:</p>
        <EventList events={this.props.events} />
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
