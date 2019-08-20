import React from "react";
import { Link } from "react-router-dom";

export default function TicketList(props) {
  const tickets = props.tickets;
  return (
    <div>
      {tickets &&
        tickets.map(ticket => (
          <p key={ticket.id}>
            <Link to={`/tickets/${ticket.id}`}>{ticket.name}</Link>
          </p>
        ))}
      {!tickets && <p>Loading...</p>}
    </div>
  );
}
