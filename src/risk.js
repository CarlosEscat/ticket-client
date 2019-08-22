export function risk(ticketId, myuserId, tickets, comments, myticket) {
  let risk = 0;

  //ticket is the only ticket of the author
  const ticketsUser = tickets.filter(ticket => ticket.userId === myuserId);
  if (ticketsUser.length === 1) {
    risk = risk + 10;
  }

  //there are >3 comments on the ticket
  const ticketComments = comments.filter(
    comment => comment.ticketId === ticketId
  );
  if (ticketComments.length > 3) {
    risk = risk + 5;
  }

  //ticket price is lower than the average ticket price for that event
  const totalPrice = tickets.reduce((total, current) => {
    return total + current.price;
  }, 0);

  const avg = totalPrice / tickets.length;

  if (myticket.price < avg) {
    const percentage = (100 * myticket.price) / avg;
    risk = risk + (100 - percentage);
  }
  if (myticket.price > avg) {
    const percentage = (100 * myticket.price) / avg;
    risk = risk - (100 - percentage);
  }

  //ticket was added during business hours (9-17)
  let hour = parseInt(myticket.createdAt.substring(11, 13));

  if (hour > 8 && hour < 18) {
    risk -= 10;
  } else {
    risk += 10;
  }

  //The minimal risk is 5% and the maximum risk is 95%
  if (risk < 5) {
    risk = 5;
  }
  if (risk > 95) {
    risk = 95;
  }
  risk = Math.round(risk);
  return { risk };
}
