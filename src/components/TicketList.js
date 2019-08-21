import React from "react";
import { Link } from "react-router-dom";

export default function TicketList(props) {
  const tickets = props.tickets;
  const users = props.users;
  //console.log(users);
  var style = {
    padding: "10px",
    margin: "30px",
    fontWeight: "bold"
  };
  return (
    <div>
      {tickets &&
        tickets.map(ticket => (
          <p key={ticket.id}>
            <Link to={`/tickets/${ticket.id}`}>
              <label style={style}>
                {ticket.userId}
                {/* {" "}
                {users.find(function(element) {
                  if (element.id === ticket.userId) {
                    return element.name;
                  } else {
                    return ticket.userId;
                  }
                })}{" "} */}
              </label>
              <label style={style}>{ticket.price} € </label>
              <label style={style}> {ticket.description} </label>
            </Link>
          </p>
        ))}
      {!tickets && <p>Loading...</p>}
    </div>
  );
}
