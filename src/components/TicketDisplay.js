import React from 'react';
import { TextArea, Form } from 'semantic-ui-react';
import { uuid } from 'uuidv4';
import Dropdown from './custom-dropdown/dropdown/Dropdown';

class TicketDisplay extends React.Component {
  state = {
    editTicket: false,
    currentTicket: {},
  };

  handleDropdown = (name, value) => {
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      currentTicket: {
        ...this.state.currentTicket,
        [name]: value,
      },
    });
  };

  handleChange = (e) => {
    let name = e.target.name;
    name = name.toLowerCase();
    this.setState({
      ...this.state,
      currentTicket: {
        ...this.state.currentTicket,
        [name]: e.target.value,
      },
    });
  };

  toggleEditTicket = () => {
    this.setState({
      ...this.state,
      editTicket: !this.state.editTicket,
    });
  };

  saveChanges = (currentTicket, id) => {
    this.props.editTicket(currentTicket, id);
    this.props.toggleEditTicket();
  };

  render() {
    const { ticket } = this.props;
    const { currentTicket } = this.state;
    const { editTicketStatus } = this.props;
    const departmentsDropdown = this.props.departments;
    const priorityDropdown = this.props.priorities;
    const statusDropdown = this.props.statuses;
    return (
      <>
        <div className="ui column">
          {!editTicketStatus ? (
            <div className="ui top left attached">
              <div className="ui brown label">{ticket.department}</div>
              <div className="ui red label">{ticket.priority}</div>
              <div className="ui green label">{ticket.status}</div>
            </div>
          ) : (
            <div className="ui three column centered grid">
              <div className="column">
                <Dropdown
                  customBtnStyle={{
                    color: 'white',
                    backgroundColor: '#a5673f',
                    borderColor: '#a5673f',
                  }}
                  customIconStyle={{
                    borderTop: '4px solid white',
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
                  placeholder={ticket.department}
                  choices={departmentsDropdown.map((choice) => choice)}
                  name="Department"
                  handleChoice={(choice) =>
                    this.handleDropdown('department', choice)
                  }
                />
              </div>
              <div className="column">
                <Dropdown
                  customBtnStyle={{
                    color: 'white',
                    backgroundColor: '#db2828',
                    borderColor: '#db2828',
                  }}
                  customIconStyle={{
                    borderTop: '4px solid white',
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
                  placeholder={ticket.priority}
                  choices={priorityDropdown.map((choice) => choice)}
                  name="Priority"
                  handleChoice={(choice) =>
                    this.handleDropdown('priority', choice)
                  }
                />
              </div>
              <div className="column">
                <Dropdown
                  customBtnStyle={{
                    color: 'white',
                    backgroundColor: '#21BA45',
                    borderColor: '#21BA45',
                  }}
                  customIconStyle={{
                    borderTop: '4px solid white',
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
                  placeholder={ticket.status}
                  choices={statusDropdown.map((choice) => choice)}
                  name="Status"
                  handleChoice={(choice) =>
                    this.handleDropdown('status', choice)
                  }
                />
              </div>
            </div>
          )}
          <h2>{ticket.subject}</h2>
          <div>
            <div>
              {ticket.description.split('\n').map((line) => (
                <p key={uuid()}>{line}</p>
              ))}
            </div>
            <p style={styles.innerFooter}>
              <a href="#!">{ticket.createdBy}</a>, {ticket.createdOn}
            </p>
            <hr />
            {ticket.logs.map((update) => {
              return (
                <div key={Math.floor(Math.random() * 9999)}>
                  <br />
                  <p>{update.body}</p>
                  <p>
                    <a href="#!">{update.updatedBy}</a>, {update.updatedOn}
                  </p>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
        {!editTicketStatus ? (
          <div
            className="ui brown button"
            style={styles.editBtn}
            onClick={this.props.toggleEditTicket}
          >
            <i className="pencil icon"></i>
          </div>
        ) : (
          <>
            <div className="content">
              <Form>
                <TextArea
                  placeholder="description"
                  name="Description"
                  style={styles.textArea}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form>
            </div>
            <div
              className="ui two column centered grid"
              style={styles.container}
            >
              <div
                className="ui brown label button column"
                onClick={() => this.saveChanges(currentTicket, ticket.id)}
                style={styles.dropdowns}
              >
                <i className="paper plane outline icon big"></i>SEND
              </div>
              <div
                className="ui label button column"
                onClick={this.props.toggleEditTicket}
                style={styles.dropdowns}
              >
                <i className="times circle outline icon big"></i>
                CANCEL
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

const styles = {
  editBtn: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  innerFooter: {
    marginTop: '25px',
  },
  textArea: {
    minWidth: '100%',
    marginBottom: '50px',
  },
};

export default TicketDisplay;
