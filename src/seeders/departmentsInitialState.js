export const departmentsInitialState = {
  edit: null,
  editMenu: {
    icon: 'pencil alternate',
    text: 'Edit',
  },
  removeMenu: {
    icon: 'minus circle',
    text: 'Remove',
    color: 'red',
  },
  addDepartment: false,
  editDepartment: false,
  dropdowns: [
    {
      placeholder: 'extension',
      choices: ['3565', '4664', '5632', '5665', '7878', '7337'],
    },
    {
      placeholder: 'description',
      choices: [
        'Our days are filled with positivity because for us, it is key to success.',
        'We do things the only way: The Right Way!',
        'Humane and true to the heart.',
        'Not everyday is a piece of cake, but we do it with determination.',
        'We take decisions based on facts and after thorough analysis.',
      ],
    },
  ],
};
