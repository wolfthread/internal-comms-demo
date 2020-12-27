import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/authActions';
import { uuid } from 'uuidv4';

class SimAuth extends React.Component {
  handleAuthStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(uuid());
    } else {
      this.props.signOut();
    }
  };

  handleSignIn = () => {
    this.props.signIn();
  };

  handleSignOut = () => {
    this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui yellow button" onClick={this.handleSignOut}>
          Sign Out (simul)
        </button>
      );
    } else {
      return (
        <button className="ui brown button" onClick={this.handleSignIn}>
          Sign in (simul)
        </button>
      );
    }
  }

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(SimAuth);
