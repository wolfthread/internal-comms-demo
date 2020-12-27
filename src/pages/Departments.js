import React from 'react';
import { fetchDepartments } from '../actions/departmentActions';
import { connect } from 'react-redux';
import DepartmenDisplay from '../components/DepartmentDisplay';
import SubMenu from '../components/SubMenu';
import ResourceAdd from '../components/ResourceAdd';
import ResourceEdit from '../components/ResourceEdit';
import {
  addDepartment,
  updateDepartment,
  deleteDepartment,
} from '../actions/departmentActions';
import { departmentsInitialState } from '../seeders/departmentsInitialState';
import { uuid } from 'uuidv4';

class Departments extends React.Component {
  state = departmentsInitialState;

  componentDidMount() {
    this.props.fetchDepartments();
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
            addDepartment: false,
            edit: {
              icon: item.icon,
              text: item.text,
              color: item.color,
            },
          });
    };

    const toggleAddDepartment = () => {
      this.setState({
        ...this.state,
        addDepartment: !this.state.addDepartment,
        edit: false,
      });
    };

    return [
      {
        icon: 'plus circle',
        title: 'Add',
        action: () => {
          toggleAddDepartment();
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
      addDepartment: false,
      editDepartment: false,
    });
  };

  inputsList = () => {
    const { extension, description } = this.state.editDepartment;
    return [
      {
        type: 'text',
        maxLength: '10',
        name: 'extension',
        value: extension,
      },
      {
        type: 'text',
        maxLength: '50',
        name: 'description',
        value: description,
      },
    ];
  };

  renderDepartments = () => {
    let departmentList = [];
    if (this.props.departments) {
      departmentList = this.props.departments.map((dpt) => {
        return (
          <div className="column" key={uuid()}>
            <DepartmenDisplay
              name={dpt.name}
              description={dpt.description}
              extension={dpt.extension}
              picture={dpt.picture}
              email={dpt.email}
              edit={this.state.edit}
              handleClick={this.handleClick}
              id={dpt.id}
            />
          </div>
        );
      });
    }
    return departmentList;
  };

  handleClick = (type, id) => {
    if (type === 'Edit') {
      this.setState({
        ...this.state,
        edit: null,
        editDepartment: this.props.departments.find((dpt) => dpt.id === id),
      });
    } else if (type === 'Remove') {
      if (window.confirm('Are you sure you want to delete this department?')) {
        this.props.deleteDepartment(id);
        this.setState({
          ...this.state,
          edit: null,
        });
      }
    }
  };

  checkDepartments = () => {
    if (this.props.departments) {
      return (
        <div className="ui four column doubling grid">
          {this.renderDepartments()}
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

  render() {
    return (
      <>
        {this.props.role === 'Administrator' ? (
          <SubMenu menuItems={this.getMenuAdmin()} />
        ) : null}
        {this.state.editDepartment ? (
          <ResourceEdit
            cancel={this.cancel}
            type="business"
            action={this.props.updateDepartment}
            name={this.state.editDepartment.name}
            inputsList={this.inputsList()}
            resource={this.state.editDepartment}
          />
        ) : null}
        {this.state.addDepartment ? (
          <ResourceAdd
            dropdowns={this.state.dropdowns}
            cancel={this.cancel}
            type="business"
            action={this.props.addDepartment}
          />
        ) : null}
        <div>{this.checkDepartments()}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    departments: state.departments.departments,
  };
};

export default connect(mapStateToProps, {
  fetchDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
})(Departments);
