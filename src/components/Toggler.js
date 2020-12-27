import React from 'react';

const Toggler = (props) => {
  return (
    <div
      className={`ui ${props.attribute === props.title ? 'brown' : ''} button`}
      style={styles.btn}
      onClick={() => {
        props.toggle(props.title);
      }}
    >
      {props.title}
    </div>
  );
};

const styles = {
  btn: {
    marginTop: '5px',
  },
};

export default Toggler;
