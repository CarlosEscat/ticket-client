import React from "react";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { loadTickets, loadUsers } from "../actions";
import AddCommentsContainer from "./AddCommentsContainer";
import CommentListContainer from "./CommentListContainer";

class TicketContainer extends React.Component {
  render() {
    const ticketId = parseInt(this.props.match.params.ticketId);
    const tickets = this.props.tickets;
    const myticket = tickets.find(function(element) {
      return element.id === ticketId;
    });

    const users = this.props.users;
    const myuser = users.find(function(element) {
      return element.id === myticket.userId;
    });
    //console.log("users test: ", users);
    //console.log("myusers test: ", myuser);
    //console.log("tickets array test: ", this.props.comments);
    // console.log("ticket details test: ", myticket);
    var style = {
      padding: "10px",
      fontWeight: "bold"
    };

    return (
      <div>
        <h2>Ticket from user {myuser.name}</h2>
        <h3>Risk: %</h3>
        <p style={style}>EUR {myticket.price} </p>
        <label>Description: {myticket.description}</label>

        <div>
          <CommentListContainer tickets={myticket} />
        </div>
        <div>
          <AddCommentsContainer tickets={myticket} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { loadTickets, loadUsers };

function mapStateToProps(state) {
  return {
    users: state.userlist,
    tickets: state.ticketList,
    comments: state.commentList
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketContainer);
