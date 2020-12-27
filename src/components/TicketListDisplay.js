import React from 'react';
import { uuid } from 'uuidv4';

const TicketListDisplay = ({
  ticket,
  blurbStyle,
  LabelStyle,
  titleStyle,
  getTicket,
}) => {
  return (
    <div className="item" onClick={() => getTicket(ticket)} key={uuid()}>
      <div>
        <label className="ui brown horizontal label">{ticket.department}</label>
        <label className="ui red horizontal label">{ticket.priority}</label>
        <label className="ui green horizontal label">{ticket.status}</label>
        <div style={blurbStyle}>
          <span style={titleStyle}>
            {ticket.createdOn} - {ticket.subject}
          </span>
        </div>
      </div>
      <div style={LabelStyle}></div>
    </div>
  );
};

export default TicketListDisplay;
