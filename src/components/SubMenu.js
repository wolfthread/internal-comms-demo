import React from 'react';
import { uuid } from 'uuidv4';

class SubMenu extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    if (this.props.visible) {
      this.setState({ ...this.state, visible: !this.state.visible });
    }
  }

  render() {
    const { visible } = this.state;
    const { menuItems } = this.props;
    return (
      <>
        <div
          className="ui brown button"
          style={styles.toggleMenu}
          onClick={() => {
            this.setState({ ...this.state, visible: !visible });
          }}
        >
          Actions{'  '}
          <i
            className={`ui ${
              this.state.visible ? 'angle up' : 'angle down'
            } icon`}
          ></i>
        </div>
        {visible ? (
          <div className="ui container stackable labeled icon menu">
            {menuItems.map((menuItem) => {
              return (
                <div
                  className={
                    menuItem.className ? menuItem.className : 'ui item button'
                  }
                  key={uuid()}
                  onClick={menuItem.action}
                >
                  <i className={`${menuItem.icon} icon`}></i>
                  {menuItem.title}
                </div>
              );
            })}
          </div>
        ) : null}
      </>
    );
  }
}

const styles = {
  toggleMenu: { marginBottom: '10px' },
};

export default SubMenu;
