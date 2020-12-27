import React, { Component } from 'react';
import styled from 'styled-components';

const OutsideLink = styled.a`
  color: grey;
  :hover {
    color: white,
  },
`;

export class Footer extends Component {
  render() {
    return (
      <div
        className="ui inverted vertical footer segment"
        style={styles.footerContainer}
      >
        <div className="ui container">
          <div className="ui stackable inverted divided equal height stackable grid">
            <div className="four wide column" style={styles.column}>
              <h4 className="ui inverted header">About</h4>
              <div className="ui inverted link list">
                <a
                  href="https://sylvaindessureault.com/contact.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item"
                >
                  Contact Us
                </a>
                <OutsideLink
                  href="https://sylvaindessureault.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item"
                >
                  Copyright &copy; 2020 Sylvain Dessureault
                </OutsideLink>
              </div>
            </div>
            <div className="nine wide column">
              <h4 className="ui inverted header">Our Philosophy</h4>
              <p>
                We take communication at the heart of small businesses success.
                Our solutions are not only customized to your needs, but are so
                easy to manage that you will feel right at home on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  footerContainer: { bottom: 0, marginTop: '50px' },
  column: { marginLeft: '10px' },
};

export default Footer;
