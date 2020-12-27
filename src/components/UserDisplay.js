import React from 'react';

const formatRole = (role) => {
  if (role) {
    return `${role[0].toUpperCase()}${role.slice(1)}`;
  }
  return '';
};

const UserDisplay = (props) => {
  return (
    <>
      <div className="ui link cards" style={styles.card}>
        <div className="card">
          <div className="image">
            <img src={props.picture} alt="" />
          </div>
          <div className="content">
            <div className="header">{props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="building outline icon"></i> {props.department}
              <p>
                <i className="sitemap icon"></i> {formatRole(props.role)}
              </p>
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
  card: { maxWidth: '175px' },
};

export default UserDisplay;
