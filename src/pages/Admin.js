import React from 'react';
import { connect } from 'react-redux';
import Chooser from '../components/Chooser';
import {
  toggleRole,
  toggleDepartment,
  toggleUser,
} from '../actions/authActions';
import { fetchUsers } from '../actions/userActions';
import { fetchDepartments } from '../actions/departmentActions';
import { fetchTickets } from '../actions/ticketActions';
import { adminInitialState } from '../seeders/adminInitialState';

class Admin extends React.Component {
  state = adminInitialState;

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchDepartments();
  }

  getDepartments = () => {
    if (this.props.departments) {
      return this.props.departments.map((dpt) => dpt.name);
    } else {
      return [];
    }
  };

  getUsers = () => {
    if (this.props.users) {
      return this.props.users.map((user) =>
        user.department === this.props.department &&
        user.role === this.props.role
          ? user.name
          : null
      );
    } else {
      return [];
    }
  };

  render() {
    const {
      rolesPlaceholders,
      departmentsPlaceholders,
      usersPlaceholders,
    } = this.state;
    if (rolesPlaceholders && departmentsPlaceholders && usersPlaceholders) {
      return (
        <div className="ui two column stackable centered grid">
          <div className="column"></div>
          <div className="three column centered row">
            <div className="column">
              <div className="ui center aligned ">
                <Chooser
                  list={rolesPlaceholders.choices}
                  description={rolesPlaceholders.description}
                  meta={rolesPlaceholders.meta}
                  header={rolesPlaceholders.header}
                  type={this.props.role}
                  toggle={this.props.toggleRole}
                />
              </div>
            </div>
            <div className="column">
              <div className="ui center aligned ">
                <Chooser
                  list={this.getDepartments()}
                  description={departmentsPlaceholders.description}
                  meta={departmentsPlaceholders.meta}
                  header={departmentsPlaceholders.header}
                  type={this.props.department}
                  toggle={this.props.toggleDepartment}
                />
              </div>
            </div>
            <div className="column">
              <div className="ui center aligned ">
                <Chooser
                  list={this.getUsers()}
                  description={usersPlaceholders.description}
                  meta={usersPlaceholders.meta}
                  header={usersPlaceholders.header}
                  type={this.props.user}
                  toggle={this.props.toggleUser}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    department: state.auth.department,
    user: state.auth.user,
    departments: state.departments.departments,
    users: state.users.users,
    tickets: state.tickets.tickets,
  };
};

export default connect(mapStateToProps, {
  toggleRole,
  toggleDepartment,
  toggleUser,
  fetchUsers,
  fetchDepartments,
  fetchTickets,
})(Admin);
