export const ticketsInitialState = {
  alert: {
    message:
      'Please note that due to the Demo Aspect of this application, any changes made within the ticketing system will not hold once you refresh any page.',
    color: 'red',
  },
  currentTicket: false,
  addTicket: false,
  editTicket: false,
  statuses: ['open', 'on hold', 'closed'],
  priorities: ['high', 'normal', 'low'],
  filterDepartment: 'All Departments',
  filterPriority: 'All Priorities',
  filterStatus: 'All Statuses',
  filterAlpha: false,
  filterSearch: false,
};
