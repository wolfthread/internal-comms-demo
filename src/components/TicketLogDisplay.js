import React from 'react';

const TicketLogDisplay = ({ log }) => {
  return (
    <>
      <div className="content column" style={styles.container}>
        <h4 className="ui sub header">
          Updated on {log.updatedOn} by <a href="#!">{log.updatedBy}</a>
        </h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              <div className="summary">
                {log.changeOfStatus[0] ? (
                  <p style={styles.statusLog}>
                    Status changed from {log.changeOfStatus[1]} to{' '}
                    {log.changeOfStatus[2]}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                {log.changeOfPriority[0] ? (
                  <p style={styles.statusLog}>
                    Priority changed from {log.changeOfPriority[1]} to{' '}
                    {log.changeOfPriority[2]}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="event">
            <div className="content">
              <div className="summary">
                {log.transfer[0] ? (
                  <p style={styles.transferLog}>
                    Transferred from {log.transfer[1]} to {log.transfer[2]}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: '10px',
  },
  statusLog: {
    color: 'orange',
  },
  transferLog: {
    color: 'red',
  },
};

export default TicketLogDisplay;
