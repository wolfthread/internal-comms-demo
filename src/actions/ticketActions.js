/*
This version is to be used with the local state demo application.
 */

import { FETCH_TICKETS, ADD_TICKET, UPDATE_TICKET } from './types';

// CRUD ACTION CREATORS

// CREATE TICKET
export const addTicket = (ticket) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TICKET,
      payload: ticket,
    });
  } catch (err) {
    console.error(err);
  }
};

// GET TICKETS
export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_TICKETS,
    });
  } catch (err) {
    console.error(err);
  }
};

// UPDATE a ticket
export const updateTicket = (ticket, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TICKET,
      payload: ticket,
    });
  } catch (err) {
    console.error(err);
  }
};
