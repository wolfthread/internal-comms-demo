export const ticketsByDepartmentCalc = (departments = [], tickets = []) => {
  let data = [];
  // temporary algo, TODO: improve performance
  for (let department of departments) {
    let departmentCount = 0;
    for (let ticket of tickets) {
      if (ticket.department === department.name) {
        departmentCount++;
      }
    }
    data.push({
      name: department.name,
      value: departmentCount,
    });
  }
  return data;
};
