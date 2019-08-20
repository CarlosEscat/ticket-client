import React from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { loadTickets } from "../actions";
import TicketList from "./EventList";

class TicketListContainer extends React.Component {
  render() {
    this.props.loadTickets();
    // var style = {
    //   padding: "10px",
    //   fontWeight: "bold"
    // };

    return (
      <div>
        <p>Ticket List:</p>
        <TicketList tickets={this.props.tickets} />
        <br />
        <br />
        <br />
        {/* <NavLink to="/event/addEvent">
          <label style={style}>Add New Events</label>
        </NavLink> */}
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
