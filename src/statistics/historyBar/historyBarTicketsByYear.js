import { ticketsByYearCalc } from '../../utils/statistics/ticketsByYearCalc';

export const ticketsByYear = (tickets, currentYear) => {
  const calc = ticketsByYearCalc(tickets, currentYear);
  const data = calc.map((yearCount) => {
    return {
      name: yearCount.name,
      tickets: yearCount.value,
      amt: yearCount.value,
    };
  });
  return data;
};
