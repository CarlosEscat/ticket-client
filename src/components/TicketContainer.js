import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadTickets, loadUsers, addTicket } from "../actions";
import AddCommentsContainer from "./AddCommentsContainer";
import CommentListContainer from "./CommentListContainer";
import { risk } from "../risk";

class TicketContainer extends React.Component {
  render() {
    const ticketId = parseInt(this.props.match.params.ticketId);
    const tickets = this.props.tickets;
    const myticket = tickets.find(function(element) {
      return element.id === ticketId;
    });
    this.props.addTicket(myticket);
    const users = this.props.users;
    const myuser = users.find(function(element) {
      return element.id === myticket.userId;
    });

    var style = {
      padding: "10px",
      fontWeight: "bold"
    };

    const comments = this.props.comments;
    const myRisk = risk(ticketId, myuser.id, tickets, comments, myticket);
    let mycolor = "white";
    if (myRisk.risk < 50) {
      mycolor = "green";
    } else if (myRisk.risk >= 50 && myRisk.risk < 75) {
      mycolor = "yellow";
    } else {
      mycolor = "red";
    }
    var color = {
      color: mycolor
    };

    let isVisible = false;
    const token = this.props.token;

    if (Object.keys(token).length !== 0) {
      isVisible = true;
    }

    return (
      <div>
        <h2>Ticket from user {myuser.name}</h2>
        <h3 style={color}>Risk: {myRisk.risk} %</h3>
        <p style={style}>EUR {myticket.price} </p>
        <label>Description: {myticket.description}</label>
        <br />
        <br />
        {isVisible ? (
          <NavLink
            to={{ pathname: "/event/editTicket", aboutProps: { myticket } }}
          >
            <label style={style}>Edit ticket</label>
          </NavLink>
        ) : (
          <div />
        )}
        <div>
          <CommentListContainer tickets={myticket} />
        </div>
        {isVisible ? (
          <div className="addingComments">
            <AddCommentsContainer tickets={myticket} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { loadTickets, loadUsers, addTicket };

function mapStateToProps(state) {
  return {
    users: state.userlist,
    tickets: state.ticketList,
    comments: state.commentList,
    token: state.userToken
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketContainer);
