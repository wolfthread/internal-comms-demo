import React from 'react';
import { uuid } from 'uuidv4';

const SideBar = (props) => {
  return (
    <div
      className="ui left push vertical inverted sidebar visible labeled icon menu"
      style={styles.container}
    >
      {props.menu.map(({ icon, title, action }) => {
        return (
          <div
            className="ui item button"
            key={uuid()}
            onClick={action}
            style={styles.sidebarBtn}
          >
            <i className={`${icon} icon`}></i>
            {title}
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
  },
  sidebarBtn: {},
};

export default SideBar;
