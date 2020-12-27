import React from 'react';

const Alert = (props) => {
  return <div className={`ui ${props.color} message`}>{props.message}</div>;
};

export default Alert;
