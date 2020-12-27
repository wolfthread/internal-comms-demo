export const ticketsByStatusDptCalc = (tickets = []) => {
  let data = [];
  let statusCountsByDpt = {};
  // temporary algo, TODO: improve performance
  if (tickets.length > 0) {
    for (let ticket of tickets) {
      const { status } = ticket;
      const department = ticket.department.slice(0, 4) + '.';
      if (statusCountsByDpt[department]) {
        if (statusCountsByDpt[department][status]) {
          statusCountsByDpt[department][status]++;
        } else {
          statusCountsByDpt[department] = {
            ...statusCountsByDpt[department],
            [status]: 1,
          };
        }
      } else {
        statusCountsByDpt[department] = {
          ...statusCountsByDpt[department],
          [status]: 1,
        };
      }
    }
    for (let countByDpt in statusCountsByDpt) {
      const formattedCount = {
        ...statusCountsByDpt[countByDpt],
        'x-axis': countByDpt,
      };
      data.push(formattedCount);
    }
  }
  return data;
};
