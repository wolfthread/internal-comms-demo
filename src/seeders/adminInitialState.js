export const adminInitialState = {
  rolesPlaceholders: {
    choices: ['Administrator', 'Manager', 'User'],
    description:
      'Depending on the role chosen, different sets of permissions will be granted.',
    meta: 'Choose your demo mode role.',
    header: 'Role',
  },

  departmentsPlaceholders: {
    description:
      'Although they can open a ticket in any department, managers and users will only see the tickets and statistics related to the department they belong to.',
    meta: 'Choose your demo mode department.',
    header: 'Department',
  },

  usersPlaceholders: {
    description:
      'A user will have its signature on any communication within the ticketing system.',
    meta: 'Choose your demo mode user.',
    header: 'User',
  },
};
