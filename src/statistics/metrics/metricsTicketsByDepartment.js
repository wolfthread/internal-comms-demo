import { ticketsByDepartmentCalc } from '../../utils/statistics/ticketsByDepartmentCalc';

export const ticketsByDepartment = (users, tickets) => {
  const calc = ticketsByDepartmentCalc(users, tickets);
  return {
    data: calc.filter((deptData) => {
      return deptData.value > 0;
    }),
  };
};
