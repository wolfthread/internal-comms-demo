import React from 'react';

const DepartmentDisplay = (props) => {
  return (
    <>
      <div className="ui link cards" style={styles.cardContainer}>
        <div className="card" style={styles.card}>
          <div className="image">
            <img src={props.picture} alt="" />
          </div>
          <div className="content">
            <div className="header">{props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="building outline icon"></i> {props.extension}
              <p>{props.description}</p>
            </span>
          </div>
          {props.edit ? (
            <div
              className={`ui bottom ${props.edit.color} attached button`}
              onClick={() => props.handleClick(props.edit.text, props.id)}
            >
              <i className={`${props.edit.icon} icon`}></i>
              {props.edit.text}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const styles = {
  cardContainer: { maxWidth: '100%' },
  card: { minHeight: '200px' },
};

export default DepartmentDisplay;
