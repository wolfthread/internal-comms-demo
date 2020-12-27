import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SimAuth from './SimAuth';
import logo from '../img/internal-comms-logo.png';

class Navbar extends Component {
  renderDemoBar() {
    if (this.props.isSignedIn) {
      return (
        <div className="ui brown ribbon label">
          <p>DEMO MODE</p>
          <p>{this.props.user}</p>
          <p>{this.props.role}</p>
          <p>{this.props.department}</p>
        </div>
      );
    } else {
      return (
        <div className="item">
          <div className="ui tiny image">
            <img src={logo} alt="logo" />
          </div>
        </div>
      );
    }
  }

  renderMenu() {
    if (this.props.isSignedIn) {
      return (
        <>
          <Redirect to="/dashboard" />
          <NavLink to="/dashboard" className="item">
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink to="/tickets" className="item">
            <h3>Tickets</h3>
          </NavLink>
          <NavLink to="/users" className="item">
            <h3>Users</h3>
          </NavLink>
          <NavLink to="/departments" className="item">
            <h3>Departments</h3>
          </NavLink>
          <NavLink to="/admin" className="item">
            <h3>Admin</h3>
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/" />
          <Link to="/" className="item">
            <h3>Home</h3>
          </Link>
          <NavLink to="/features" className="item">
            <h3>Features</h3>
          </NavLink>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <div className="ui container stackable menu">
          {this.renderDemoBar()}

          {this.renderMenu()}
          <div className="item">
            <SimAuth />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    role: state.auth.role,
    department: state.auth.department,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);
