import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../img/background.jpg';

class Homepage extends React.Component {
  getStyle = () => {
    return {
      width: '100%',
      height: 450,
      display: 'inline-block',
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      fontSize: '4em',
      fontWeight: 'normal',
      marginBottom: 0,
    };
  };

  getBlurbStyle = (color) => {
    return {
      backgroundColor: color,
      opacity: 0.8,
      borderRadius: '10px',
      paddingBottom: '20px',
    };
  };

  render() {
    return (
      <>
        <div className="container pusher">
          <div
            className="ui vertical masthead center aligned segment"
            style={this.getStyle()}
          >
            <div className="ui container">
              <div
                className="ui text container"
                style={this.getBlurbStyle('#fff')}
              >
                <h1 className="ui huge header">INTERNAL-COMMS</h1>
                <h2>A Simple Ticketing System for Startups.</h2>
                <Link to={'/get-started'} className="ui large brown button">
                  Get Started
                  <i className="right arrow icon"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
