import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadTickets } from "../actions";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  render() {
    const eventId = this.props.match.params.eventId;
    this.props.loadTickets(eventId);
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };

    //console.log(eventId);
    return (
      <div>
        <p>Ticket List:</p>
        <TicketList tickets={this.props.tickets} />
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
    tickets: state.ticketList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
