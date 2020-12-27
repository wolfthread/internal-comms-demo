import React from 'react';
import './SelectStyles.css';

const Select = ({
  choices,
  handleSelect,
  dropdownListStyle,
  ulStyle,
  liStyle,
}) => {
  return (
    <div style={dropdownListStyle}>
      <ul style={ulStyle}>
        {choices.map((choice) => (
          <li
            id={choices.indexOf(choice)}
            key={choices.indexOf(choice)}
            onClick={() => handleSelect(choice)}
            style={liStyle}
          >
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
