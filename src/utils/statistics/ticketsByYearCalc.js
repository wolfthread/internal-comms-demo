export const ticketsByYearCalc = (tickets = [], currentYear) => {
  let data = [];
  let yearsCount = {};
  for (let ticket of tickets) {
    const year = ticket.createdOn.slice(11, 15);
    if (yearsCount[year]) {
      yearsCount[year]++;
    } else {
      yearsCount[year] = 1;
    }
  }
  for (let year in yearsCount) {
    data.push({
      name: year,
      value: yearsCount[year],
    });
  }
  return data;
};
