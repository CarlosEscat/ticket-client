import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadTickets } from "../actions";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  render() {
    const eventId = parseInt(this.props.match.params.eventId);
    this.props.loadTickets(eventId);
    const events = this.props.events;
    const myevent = events.find(function(element) {
      return element.id === eventId;
    });

    var style = {
      padding: "10px",
      fontWeight: "bold"
    };

    //console.log(myevent);
    return (
      <div>
        <h1>EVENT: {myevent.name}</h1>
        <p>Ticket List:</p>
        <TicketList
          tickets={this.props.tickets}
          users={this.props.users}
          event={myevent}
        />
        <br />
        <br />
        <br />
        <NavLink to={`/event/${eventId}/Addticket`}>
          <label style={style}>Add New Ticket</label>
        </NavLink>
      </div>
    );
  }
}

const mapDispatchToProps = { loadTickets };

function mapStateToProps(state) {
  return {
    tickets: state.ticketList,
    users: state.userlist,
    events: state.eventList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
