import React, { Component } from 'react';
import Dropdown from './custom-dropdown/dropdown/Dropdown';
import { uuid } from 'uuidv4';
import { generateRandomPicture } from '../utils/randomPictures';

class ResourceAdd extends Component {
  state = {
    picture: false,
    resourceForm: { id: uuid() },
  };

  togglePicture = () => {
    const picture = generateRandomPicture(
      this.props.type,
      this.state.resourceForm.gender
    );
    this.setState({
      ...this.state,
      picture: !this.state.picture,
      resourceForm: {
        ...this.state.resourceForm,
        picture,
      },
    });
  };

  handleDropdown = (name, value) => {
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      resourceForm: {
        ...this.state.resourceForm,
        [name]: value,
      },
    });
  };

  handleName = (e) => {
    this.setState({
      ...this.state,
      resourceForm: {
        ...this.state.resourceForm,
        name: e.target.value,
      },
    });
  };

  saveResource = () => {
    const { form } = this.state.resourceForm;
    for (let key in form) {
      if (!form[key]) {
        return null;
      }
    }
    this.props.action(this.state.resourceForm);
    this.props.cancel();
  };

  checkPlaceholder = (currentPlaceholder) => {
    if (this.state.resourceForm[currentPlaceholder]) {
      return this.state.resourceForm[currentPlaceholder];
    }
    return currentPlaceholder;
  };

  render() {
    const { resourceForm } = this.state;
    return (
      <>
        <div className="ui link cards">
          <div className="card">
            <div className="content">
              <div className="ui input header">
                <input
                  type="text"
                  placeholder="Name"
                  maxLength="25"
                  onChange={(e) => this.handleName(e)}
                />
              </div>
            </div>
            <div className="extra content">
              {this.props.dropdowns
                ? this.props.dropdowns.map((dropdown) => {
                    return (
                      <div className="content" key={uuid()}>
                        <div className="ui ">
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
                              color: 'black',
                              backgroundColor: 'white',
                              textAlign: 'left',
                            }}
                            customLiStyle={{
                              padding: '5px',
                            }}
                            placeholder={this.checkPlaceholder(
                              dropdown.placeholder
                            )}
                            choices={dropdown.choices.map((choice) => choice)}
                            name={dropdown.placeholder}
                            handleChoice={(choice) =>
                              this.handleDropdown(dropdown.placeholder, choice)
                            }
                          />
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
            {this.state.picture ? (
              <>
                <div className="image">
                  <img src={this.state.resourceForm.picture} alt="" />
                </div>
                <div
                  className="ui button attached"
                  onClick={this.togglePicture}
                >
                  Remove Picture
                </div>
              </>
            ) : (
              <div className="ui button attached" onClick={this.togglePicture}>
                Add Picture
              </div>
            )}

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

export default ResourceAdd;
