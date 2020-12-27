import { ticketsByUserCalc } from '../../utils/statistics/ticketsByUserCalc';

export const ticketsByUser = (users, tickets) => {
  const calc = ticketsByUserCalc(users, tickets);
  return {
    data: calc.filter((userData) => {
      return userData.value > 0;
    }),
  };
};
