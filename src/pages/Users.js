import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import UserDisplay from '../components/UserDisplay';
import SubMenu from '../components/SubMenu';
import ResourceAdd from '../components/ResourceAdd';
import ResourceEdit from '../components/ResourceEdit';
import { addUser, updateUser, deleteUser } from '../actions/userActions';
import { uuid } from 'uuidv4';
import { usersInitialState } from '../seeders/usersInitialState';

class Users extends React.Component {
  state = usersInitialState;

  componentDidMount() {
    this.props.fetchUsers();
  }

  getMenuAdmin = () => {
    const { editMenu, removeMenu } = this.state;

    const getAction = (item) => () => {
      this.state.edit
        ? this.setState({
            ...this.state,
            edit: null,
          })
        : this.setState({
            ...this.state,
            addUser: false,
            edit: {
              icon: item.icon,
              text: item.text,
              color: item.color,
            },
          });
    };

    const toggleAddUser = () => {
      this.setState({
        ...this.state,
        addUser: !this.state.addUser,
        edit: false,
      });
    };

    return [
      {
        icon: 'plus circle',
        title: 'Add',
        action: () => {
          toggleAddUser();
        },
      },
      {
        icon: removeMenu.icon,
        title: removeMenu.text,
        action: getAction(removeMenu),
      },
      {
        icon: editMenu.icon,
        title: editMenu.text,
        action: getAction(editMenu),
      },
    ];
  }; // menu admin

  cancel = () => {
    this.setState({
      ...this.state,
      addUser: false,
      editUser: false,
    });
  };

  handleClick = (type, id) => {
    if (type === 'Edit') {
      this.setState({
        ...this.state,
        edit: null,
        editUser: this.props.users.find((user) => user.id === id),
      });
    } else if (type === 'Remove') {
      if (window.confirm('Are you sure you want to delete this user?')) {
        this.props.deleteUser(id);
        this.setState({
          ...this.state,
          edit: null,
        });
      }
    }
  };

  checkUsers = () => {
    if (this.props.users) {
      return (
        <div className="ui five column doubling grid">{this.renderUsers()}</div>
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

  renderUsers = () => {
    let userList = [];
    if (this.props.users) {
      userList = this.props.users.map((user) => {
        return (
          <div className="column" key={uuid()}>
            <UserDisplay
              name={user.name}
              role={user.role}
              department={user.department}
              picture={user.picture}
              email={user.email}
              edit={this.state.edit}
              handleClick={this.handleClick}
              id={user.id}
            />
          </div>
        );
      });
    }
    return userList;
  };

  render() {
    return (
      <>
        {this.props.role !== 'User' ? (
          <SubMenu menuItems={this.getMenuAdmin()} />
        ) : null}
        {this.state.editUser ? (
          <ResourceEdit
            cancel={this.cancel}
            type="user"
            action={this.props.updateUser}
            name={this.state.editUser.name}
            dropdownsList={this.state.dropdowns}
            resource={this.state.editUser}
          />
        ) : null}
        {this.state.addUser ? (
          <ResourceAdd
            dropdowns={this.state.dropdowns}
            cancel={this.cancel}
            type="user"
            action={this.props.addUser}
          />
        ) : null}
        <div>{this.checkUsers()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    users: state.users.users,
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
})(Users);
