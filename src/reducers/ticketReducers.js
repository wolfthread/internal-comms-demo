/*
This version is to be used with the local state demo application.
 */

import { FETCH_TICKETS, ADD_TICKET, UPDATE_TICKET } from '../actions/types';

import { INITIAL_STATE_TICKETS } from '../seeders/initialState';

export default (state = INITIAL_STATE_TICKETS, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return state;

    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    case UPDATE_TICKET:
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
      };
    default:
      return state;
  }
};
