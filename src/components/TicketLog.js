import React from 'react';

const TicketLog = ({ logs, ticket, selectionListStyle }) => {
  return (
    <div className="ui card" style={styles.logCard}>
      <div className="content">
        <div className="header">Ticket Log</div>
      </div>
      <div className="ui divided selection list" style={selectionListStyle}>
        <div className="content" style={styles.logContent}>
          <h4 className="ui sub header">
            Created on {ticket.createdOn} by <a href="#!">{ticket.createdBy}</a>
          </h4>
          <hr />
        </div>
        {logs}
      </div>
    </div>
  );
};

const styles = {
  logContent: {
    marginLeft: '10px',
    marginBottom: '15px',
  },
  logCard: {
    width: '100%',
  },
};

export default TicketLog;
