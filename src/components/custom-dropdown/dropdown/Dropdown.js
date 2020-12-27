import React from 'react';
import Select from '../select/Select';
import './DropdownStyles.css';

class Dropdown extends React.Component {
  state = {
    selected: this.props.placeholder,
    select: false,
  };

  toggleShowSelect = () => {
    this.setState({
      ...this.state,
      showSelect: !this.state.showSelect,
    });
  };

  handleSelect = (choice) => {
    this.setState({
      ...this.state,
      selected: choice,
      showSelect: !this.state.showSelect,
    });
    if (choice !== this.props.placeholder && this.props.handleChoice) {
      this.props.handleChoice(choice);
    }
  };

  renderCustomStyle = (customStyle, currentStyle) => {
    return {
      ...currentStyle,
      ...customStyle,
    };
  };

  render() {
    const { selected, showSelect } = this.state;
    const {
      choices,
      customBtnStyle = '',
      customIconStyle = '',
      customUlStyle = '',
      customLiStyle = '',
      customdropdownListStyle = '',
    } = this.props;
    return (
      <>
        <div
          className="btn disable-select"
          style={
            customBtnStyle !== ''
              ? this.renderCustomStyle(customBtnStyle, styles.btn)
              : styles.btn
          }
          onClick={this.toggleShowSelect}
        >
          {selected}
          <span
            className="dropdown-icon"
            style={
              customIconStyle !== ''
                ? this.renderCustomStyle(customIconStyle, styles.dropdownIcon)
                : styles.dropdownIcon
            }
          />
        </div>
        {showSelect ? (
          <Select
            choices={choices}
            handleSelect={this.handleSelect}
            ulStyle={
              customUlStyle !== ''
                ? this.renderCustomStyle(customUlStyle, styles.ul)
                : styles.ul
            }
            liStyle={
              customLiStyle !== ''
                ? this.renderCustomStyle(customLiStyle, styles.li)
                : styles.li
            }
            dropdownListStyle={
              customdropdownListStyle !== ''
                ? this.renderCustomStyle(
                    customdropdownListStyle,
                    styles.dropdownList
                  )
                : styles.dropdownList
            }
          />
        ) : null}
      </>
    );
  }
}

const styles = {
  btn: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'inline-block',
    backgroundColor: 'lightgrey',
    width: '100%',
    maxWidth: '200px',
    border: 'solid 2px darkgrey',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '5px',
  },
  dropdownIcon: {
    display: 'inline-block',
    float: 'right',
    marginTop: '4px',
    marginLeft: '10px',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid darkgrey',
  },
  dropdownList: {
    backgroundColor: 'lightgrey',
    border: 'solid 2px darkgrey',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
    overflow: 'scroll',
    textAlign: 'center',
  },
  ul: {
    listStyle: 'none',
    margin: '0',
    padding: '5px',
  },
  li: {
    '&hover': {
      backgroundColor: 'darkgrey',
      cursor: 'pointer',
    },
  },
};

export default Dropdown;
