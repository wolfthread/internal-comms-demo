import { ticketsByMonthCalc } from '../../utils/statistics/ticketsByMonthCalc';
import { ticketsByYearCalc } from '../../utils/statistics/ticketsByYearCalc';

export const growthTickets = (tickets, year, spread) => {
  let data;
  let calc;
  if (spread === 'month') {
    calc = ticketsByMonthCalc(tickets, year);
  } else {
    calc = ticketsByYearCalc(tickets, year);
  }
  data = calc.map((monthCount) => {
    return {
      'x-axis': monthCount.name,
      'Tickets Created': monthCount.value,
    };
  });
  return data;
};
