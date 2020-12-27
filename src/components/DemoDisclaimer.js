import React from 'react';

const DemoDisclaimer = () => {
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="column twelve wide">
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="eye icon"></i>
            <h2>This Is A Demo</h2>
          </div>
          <div className="ui inverted segment">
            <h4>
              I built this app with React in order to present a demo of a
              full-blown MERN application that could potentially be offered to
              Small Businesses.
            </h4>
            <h4>
              To try the demo, simply simulate login by clicking on Sign In and
              you will be able to try out most features of the application,
              without a persisting database. This means that any changes will be
              discarded on refresh.
            </h4>
            <p>
              If you are interested in trying the full application, along with
              database installation, please{' '}
              <a
                href="https://sylvaindessureault.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact me{' '}
              </a>
              and it will be my pleasure to guide you accordingly.
            </p>
          </div>
          <div className="inline"></div>
        </div>
      </div>
    </div>
  );
};

export default DemoDisclaimer;
