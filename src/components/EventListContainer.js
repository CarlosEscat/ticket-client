import React from "react";
import { connect } from "react-redux";
//import CreateRoom from "./CreateRoom";
import { Link } from "react-router-dom";

class EventListContainer extends React.Component {
  render() {
    console.log("this.props test:", this.props);
    const events = this.props.events.map(event => (
      <Link key={event.id} to={`/event/${event.id}`}>
        <div>{event.event_name}</div>
      </Link>
    ));

    console.log("events test:", events);

    return (
      <div>
        <div>{events}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(EventListContainer);
