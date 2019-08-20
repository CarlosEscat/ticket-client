import React from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
  const events = props.events;
  return (
    // <div>
    //   <ul>
    //     {events &&
    //       events.map(event => (
    //         <li key={event.id}>
    //           <Link to={`/events/${event.id}`}>{event.name}</Link>
    //         </li>
    //       ))}
    //     {!events && <li>Loading...</li>}
    //   </ul>
    // </div>
    <div>
      {events &&
        events.map(event => (
          <p key={event.id}>
            <Link to={`/events/${event.id}/tickets`}>{event.name}</Link>
          </p>
        ))}
      {!events && <p>Loading...</p>}
    </div>
  );
}
