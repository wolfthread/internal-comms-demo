import { ticketsByMonthCalc } from '../../utils/statistics/ticketsByMonthCalc';

// TODO: unite with ByYear
export const ticketsByMonth = (tickets, currentYear) => {
  const calc = ticketsByMonthCalc(tickets, currentYear);
  const data = calc.map((monthCount) => {
    return {
      name: monthCount.name,
      tickets: monthCount.value,
      amt: monthCount.value,
    };
  });
  return data;
};
