import React from 'react';
import { connect } from 'react-redux';
import {
  fetchTickets,
  addTicket,
  updateTicket,
} from '../actions/ticketActions';
import { fetchUsers } from '../actions/userActions';
import { fetchDepartments } from '../actions/departmentActions';
import TicketDisplay from '../components/TicketDisplay';
import TicketLog from '../components/TicketLog';
import TicketLogDisplay from '../components/TicketLogDisplay';
import AddTicket from '../components/AddTicket';
import { uuid } from 'uuidv4';
import Alert from '../components/Alert';
import {
  ticketsCategoriesFilter,
  ticketsAlphaFilter,
  ticketsSearchFilter,
} from '../utils/filters/ticketsFilter';
import { ticketsInitialState } from '../seeders/ticketsInitialState';
import Filters from '../components/Filters';
import TicketListDisplay from '../components/TicketListDisplay';

class Tickets extends React.Component {
  state = ticketsInitialState;

  componentDidMount() {
    if (this.props.role === 'Administrator') {
      this.props.fetchTickets();
      this.props.fetchUsers();
      this.props.fetchDepartments();
    } else {
      this.props.fetchTickets(this.props.department);
    }
  }

  handleFilter = (name, value) => {
    name = name.toLowerCase();
    let filters = {};
    switch (name) {
      case 'department':
        filters.filterDepartment = value;
        break;
      case 'priority':
        filters.filterPriority = value;
        break;
      case 'status':
        filters.filterStatus = value;
        break;
      default:
        break;
    }
    this.setState({
      ...this.state,
      ...filters,
    });
  };

  handleFilterAlphaUp = () => {
    this.setState({
      ...this.state,
      filterAlpha: 'up',
    });
  };

  handleFilterAlphaDown = () => {
    this.setState({
      ...this.state,
      filterAlpha: 'down',
    });
  };

  handleOnSearch = (e) => {
    this.setState({
      ...this.state,
      filterSearch: e.target.value,
    });
  };

  clearSearch = () => {
    this.setState({
      ...this.state,
      filterSearch: false,
    });
  };

  resetFilters = () => {
    this.setState({
      ...this.state,
      filterDepartment: 'All Departments',
      filterPriority: 'All Priorities',
      filterStatus: 'All Statuses',
      filterAlpha: false,
      filterSearch: false,
    });
  };

  checkTickets = () => {
    if (this.props.tickets) {
      return (
        <div className="ui divided selection list" style={styles.selectionList}>
          {this.renderTickets()}
        </div>
      );
    } else {
      return (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader"></div>
          </div>
        </div>
      );
    }
  };

  renderTickets = () => {
    const { filterDepartment, filterPriority, filterStatus } = this.state;
    let ticketList = [];
    if (this.props.tickets) {
      const rawTicketList = this.state.filterAlpha
        ? ticketsAlphaFilter(
            this.state.filterAlpha,
            this.props.tickets,
            'subject'
          )
        : this.state.filterSearch
        ? ticketsSearchFilter(this.props.tickets, this.state.filterSearch)
        : this.props.tickets;
      ticketList = rawTicketList.map((ticket) =>
        this.props.role === 'Administrator' ||
        ticket.department === this.props.department ? (
          ticketsCategoriesFilter(
            ticket,
            filterDepartment,
            filterPriority,
            filterStatus
          ) ? (
            <TicketListDisplay
              ticket={ticket}
              blurbStyle={styles.blurb}
              LabelStyle={styles.labels}
              titleStyle={styles.title}
              getTicket={this.getTicket}
              key={uuid()}
            />
          ) : null
        ) : null
      );
    }
    return ticketList;
  };

  getTicket = (ticket) => {
    if (!this.state.editTicket) {
      this.setState({
        ...this.state,
        currentTicket: ticket,
      });
    }
  };

  toggleAddTicket = () => {
    this.setState({
      ...this.state,
      addTicket: !this.state.addTicket,
      currentTicket: false,
    });
  };

  handleSaveTicket = (ticket) => {
    this.props.addTicket(ticket);
    this.setState({
      ...this.state,
      addTicket: false,
      editTicket: false,
      currentTicket: ticket,
    });
  };

  handleEditTicket = (ticket, id) => {
    const curr = this.state.currentTicket;
    const log = {
      updatedOn: Date(Date.now()).toString().slice(0, 33),
      updatedBy: this.props.user,
      body: ticket.description,
      changeOfStatus:
        ticket.status && ticket.status !== curr.status
          ? [true, curr.status, ticket.status]
          : [false, null, null],
      changeOfPriority:
        ticket.priority && ticket.priority !== curr.priority
          ? [true, curr.priority, ticket.priority]
          : [false, null, null],
      transfer:
        ticket.department && ticket.department !== curr.department
          ? [true, curr.department, ticket.department]
          : [false, null, null],
    };
    const updatedTicket = {
      ...this.state.currentTicket,
      status:
        ticket.status && ticket.status !== curr.status
          ? ticket.status
          : curr.status,
      priority:
        ticket.priority && ticket.priority !== curr.priority
          ? ticket.priority
          : curr.priority,
      department:
        ticket.department && ticket.department !== curr.department
          ? ticket.department
          : curr.department,
      logs: [...this.state.currentTicket.logs, log],
    };
    this.props.updateTicket(updatedTicket, id);
    this.setState({
      ...this.state,
      addTicket: false,
      editTicket: false,
      currentTicket: updatedTicket,
    });
  };

  toggleEditTicket = () => {
    this.setState({
      ...this.state,
      editTicket: !this.state.editTicket,
    });
  };

  checkLogs = () => {
    if (this.props.tickets) {
      return <div>{this.getLogs(this.state.currentTicket)}</div>;
    } else {
      return <div>No Log to show yet...</div>;
    }
  };

  getLogs = (ticket) => {
    const logs = ticket.logs.map((log) => {
      return <TicketLogDisplay log={log} key={uuid()} />;
    });
    return (
      <TicketLog
        logs={logs}
        ticket={ticket}
        selectionListStyle={styles.selectionList}
      />
    );
  };

  render() {
    const { role, departments, users, user } = this.props;
    const {
      filterDepartment,
      filterPriority,
      filterStatus,
      addTicket,
      currentTicket,
      statuses,
      priorities,
    } = this.state;
    return (
      <>
        <div className="ui one column centered grid" style={styles.gridStyle}>
          <div className="column">
            <div className="column">
              <Alert
                color={this.state.alert.color}
                message={this.state.alert.message}
              />
            </div>
          </div>
          <div className="column" style={styles.container}>
            <div className="ui stackable four column grid">
              <Filters
                role={role}
                style={styles.filters}
                departments={departments}
                priorities={priorities}
                statuses={statuses}
                handleFilter={(name, choice) => this.handleFilter(name, choice)}
                filterDepartment={filterDepartment}
                filterPriority={filterPriority}
                filterStatus={filterStatus}
                resetFilters={this.resetFilters}
                filterAlphaUp={this.handleFilterAlphaUp}
                filterAlphaDown={this.handleFilterAlphaDown}
                handleOnSearch={this.handleOnSearch}
                searchTerms={
                  this.state.filterSearch ? this.state.filterSearch : ''
                }
              />
            </div>
            <div className="ui two column stackable centered grid">
              <div className="column">
                {this.checkTickets()}
                <div
                  className="ui brown label button"
                  onClick={this.toggleAddTicket}
                >
                  <i className="plus circle icon big"> New</i>
                </div>
              </div>
              {addTicket ? (
                users ? (
                  <div className="column" style={styles.addTicketContainer}>
                    <AddTicket
                      user={user}
                      saveTicket={this.handleSaveTicket}
                      departments={departments.map((dpt) => dpt.name)}
                      statuses={statuses}
                      priorities={priorities}
                      cancel={this.toggleAddTicket}
                    />
                  </div>
                ) : null
              ) : null}
              {currentTicket ? (
                <div className="column" style={styles.container}>
                  <TicketDisplay
                    ticket={currentTicket}
                    departments={departments.map((dpt) => dpt.name)}
                    statuses={statuses}
                    priorities={priorities}
                    editTicket={this.handleEditTicket}
                    toggleEditTicket={this.toggleEditTicket}
                    editTicketStatus={this.state.editTicket}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {currentTicket ? (
            <div className="column" style={styles.container}>
              {this.checkLogs()}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

const styles = {
  container: {
    border: '1px solid grey',
    boxShadow: '1px 1px',
    borderRadius: '5px',
    marginTop: '25px',
  },
  addTicketContainer: {
    border: '1px solid grey',
    boxShadow: '1px 1px',
    borderRadius: '5px',
  },
  selectionList: {
    maxHeight: '300px',
    overflow: 'scroll',
    overflowX: 'hidden',
  },
  gridStyle: {
    margin: '25px',
  },
  labels: {
    marginTop: '10px',
  },
  title: {
    fontSize: '1.2rem',
  },
  blurb: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  filters: {
    width: '175px',
    marginLeft: '5px',
  },
};

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    department: state.auth.department,
    user: state.auth.user,
    tickets: state.tickets.tickets,
    users: state.users.users,
    departments: state.departments.departments,
  };
};

export default connect(mapStateToProps, {
  fetchTickets,
  fetchUsers,
  fetchDepartments,
  addTicket,
  updateTicket,
})(Tickets);
