import React from "react";
import { NavLink } from "react-router-dom";

export default function EventList(props) {
  const events = props.events;
  //console.log("events test:", events);
  return (
    <div>
      {events &&
        events.map(event => (
          // <p key={event.id}>
          //   <Link to={`/events/${event.id}/tickets`}>{event.name}</Link>
          // </p>
          <NavLink to={`/event/${event.id}/tickets`}>
            <p key={event.id}>{event.name}</p>
          </NavLink>
        ))}
      {!events && <p>Loading...</p>}
    </div>
  );
}
