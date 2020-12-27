import React, { Component } from 'react';
import Dropdown from './custom-dropdown/dropdown/Dropdown';
import { uuid } from 'uuidv4';
import { generateRandomPicture } from '../utils/randomPictures';

class ResourceEdit extends Component {
  constructor(props) {
    super(props);
    const { cancel, action, name } = this.props;
    const {
      extension,
      description,
      picture,
      role,
      gender,
      department,
      id,
    } = this.props.resource;
    this.state = {
      cancel,
      action,
      extension,
      description,
      picture,
      name,
      gender,
      role,
      department,
      id,
    };
  }

  togglePicture = () => {
    const picture = generateRandomPicture(this.props.type, this.state.gender);
    this.setState({
      ...this.state,
      picture,
    });
  };

  handleChange = (e) => {
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: e.target.value,
    });
  };

  saveResource = () => {
    const formUpdate = { ...this.state };
    Object.keys(formUpdate).forEach((key) =>
      formUpdate[key] === undefined ||
      typeof formUpdate[key] === 'object' ||
      typeof formUpdate[key] === 'function'
        ? delete formUpdate[key]
        : {}
    );
    this.props.action(formUpdate);
    this.props.cancel();
  };

  getInputs = (inputsList) => {
    if (inputsList) {
      return inputsList.map((input) => {
        return (
          <div className="ui input" key={uuid()}>
            <input
              type={input.type}
              maxLength="55"
              onChange={(e) => this.handleChange(e)}
              name={input.name}
              value={this.state[input.name]}
            />
          </div>
        );
      });
    }
  };

  getDropdowns = (dropdownsList) => {
    if (dropdownsList) {
      return dropdownsList.map((dropdown) => {
        return (
          <div className="content" key={uuid()}>
            <div className="ui">
              <Dropdown
                customBtnStyle={{
                  color: 'black',
                  backgroundColor: 'white',
                  border: '1px solid grey',
                  margin: '1px',
                }}
                customIconStyle={{
                  borderTop: '4px solid grey',
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                }}
                customdropdownListStyle={{
                  position: 'absolute',
                  zIndex: '1',
                  color: 'black',
                  backgroundColor: 'white',
                  textAlign: 'left',
                }}
                customLiStyle={{
                  padding: '5px',
                }}
                placeholder={this.checkPlaceholder(dropdown.placeholder)}
                choices={dropdown.choices.map((choice) => choice)}
                name={dropdown.placeholder}
                handleChoice={(choice) =>
                  this.handleDropdown(dropdown.placeholder, choice)
                }
              />
            </div>
          </div>
        );
      });
    }
  };

  handleDropdown = (name, value) => {
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  checkPlaceholder = (currentPlaceholder) => {
    if (this.state[currentPlaceholder]) {
      return this.state[currentPlaceholder];
    }
    return currentPlaceholder;
  };

  render() {
    return (
      <>
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <div className="ui input header">
                <input
                  type="text"
                  maxLength="20"
                  onChange={(e) => this.handleChange(e)}
                  name="name"
                  value={this.state.name}
                />
              </div>
            </div>
            <div className="extra content">
              {this.getInputs(this.props.inputsList)}
              {this.getDropdowns(this.props.dropdownsList)}
            </div>
            {this.state.picture ? (
              <div className="image">
                <img src={this.state.picture} alt="" />
              </div>
            ) : null}
            <div className="ui button attached" onClick={this.togglePicture}>
              Change Picture
            </div>
            <div
              className="ui bottom attached brown button"
              onClick={this.saveResource}
            >
              <i className="database icon"></i>
              Save
            </div>
            <div
              className="ui bottom attached button"
              onClick={this.props.cancel}
            >
              <i className="window close icon"></i>
              Cancel
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ResourceEdit;
