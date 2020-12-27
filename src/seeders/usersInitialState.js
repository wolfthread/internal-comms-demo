export const usersInitialState = {
  edit: false,
  editMenu: {
    icon: 'pencil alternate',
    text: 'Edit',
  },
  removeMenu: {
    icon: 'minus circle',
    text: 'Remove',
    color: 'red',
  },
  addUser: false,
  editUser: false,
  dropdowns: [
    {
      placeholder: 'gender',
      choices: ['Female', 'Male'],
    },
    {
      placeholder: 'department',
      choices: [
        'Accounting',
        'Customer Care',
        'Developers',
        'Direction',
        'Human Resources',
        'Marketing',
        'Sales',
      ],
    },
    {
      placeholder: 'role',
      choices: ['User', 'Manager'],
    },
  ],
};
