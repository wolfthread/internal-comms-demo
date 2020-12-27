export const ticketsByMonthCalc = (tickets = [], currentYear) => {
  let data = [];
  let datesCount = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  for (let ticket of tickets) {
    const year = ticket.createdOn.slice(11, 15);
    if (year === currentYear) {
      const month = ticket.createdOn.slice(4, 7);
      datesCount[month]++;
    }
  }
  for (let date in datesCount) {
    data.push({
      name: date,
      value: datesCount[date],
    });
  }
  return data;
};
