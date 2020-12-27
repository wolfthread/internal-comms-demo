import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="ui left icon input" style={props.style}>
      <input
        type="text"
        placeholder={`${props.placeholder}...`}
        onChange={props.handleOnSearch}
        value={props.searchTerms}
      />
      <i className={props.icon}></i>
    </div>
  );
};

export default SearchBar;
