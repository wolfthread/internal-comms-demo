/*
This version is to be used with the local state demo application.
 */

import {
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  FETCH_DEPARTMENTS,
} from '../actions/types';

import { INITIAL_STATE_DEPARTMENTS } from '../seeders/initialState';

export default (state = INITIAL_STATE_DEPARTMENTS, action) => {
  switch (action.type) {
    case FETCH_DEPARTMENTS:
      return state;
    case ADD_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload],
      };
    case UPDATE_DEPARTMENT:
      return {
        state,
        departments: state.departments.map((dpt) =>
          dpt.id === action.payload.id ? action.payload : dpt
        ),
      };
    case DELETE_DEPARTMENT:
      return {
        state,
        departments: state.departments.filter(
          (dpt) => dpt.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
