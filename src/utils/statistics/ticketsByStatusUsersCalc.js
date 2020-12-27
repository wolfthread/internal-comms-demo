export const ticketsByStatusUsersCalc = (tickets = []) => {
  let data = [];
  let statusCountsByUser = {};
  // temporary algo, TODO: improve performance
  if (tickets.length > 0) {
    for (let ticket of tickets) {
      const { status } = ticket;
      const user =
        ticket.createdBy[0] + '.' + ticket.createdBy.slice(0, 3) + '.';
      if (statusCountsByUser[user]) {
        if (statusCountsByUser[user][status]) {
          statusCountsByUser[user][status]++;
        } else {
          statusCountsByUser[user] = {
            ...statusCountsByUser[user],
            [status]: 1,
          };
        }
      } else {
        statusCountsByUser[user] = {
          ...statusCountsByUser[user],
          [status]: 1,
        };
      }
    }
    for (let countByUser in statusCountsByUser) {
      const formattedCount = {
        ...statusCountsByUser[countByUser],
        'x-axis': countByUser,
      };
      data.push(formattedCount);
    }
  }
  return data;
};
