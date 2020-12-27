import React from 'react';
import { Link } from 'react-router-dom';

const FeatureComms = (props) => {
  return (
    <>
      <h1 className="ui huge header" style={styles.header}>
        {props.title}
      </h1>
      <h3>{props.sub}</h3>
      <Link to={'/get-started'} className="ui large brown button">
        Get Started
        <i className="right arrow icon"></i>
      </Link>
    </>
  );
};

const styles = {
  header: { fontSize: '2rem', maxHeight: '100%' },
};

export default FeatureComms;
