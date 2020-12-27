export const ticketsByUserCalc = (users = [], tickets = []) => {
  let data = [];
  // temporary algo, TODO: improve performance
  for (let user of users) {
    let userCount = 0;
    for (let ticket of tickets) {
      if (ticket.createdBy === user.name) {
        userCount++;
      }
    }
    data.push({
      name: user.name,
      value: userCount,
    });
  }
  return data;
};
