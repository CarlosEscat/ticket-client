import React from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { loadTickets } from "../actions";
import AddCommentsContainer from "./AddCommentsContainer";
import CommentListContainer from "./CommentListContainer";

class TicketContainer extends React.Component {
  render() {
    const ticketId = parseInt(this.props.match.params.ticketId);
    const tickets = this.props.tickets;
    const myticket = tickets.find(function(element) {
      return element.id === ticketId;
    });

    // console.log("ticket id test: ", ticketId);
    // console.log("tickets array test: ", tickets);
    // console.log("ticket details test: ", myticket);
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };

    return (
      <div>
        <h2>Ticket from user {myticket.userId}</h2>
        <h3>Risk: %</h3>
        <p style={style}>EUR {myticket.price} </p>
        <label>Description: {myticket.description}</label>

        <div>
          <CommentListContainer />
        </div>
        <div>
          <AddCommentsContainer tickets={ticketId} />
        </div>
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
)(TicketContainer);
