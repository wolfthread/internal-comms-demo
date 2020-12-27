/*
This version is to be used with the local state demo application.
 */

import {
  SIGN_IN,
  SIGN_OUT,
  TOGGLE_ROLE,
  TOGGLE_DEPARTMENT,
  TOGGLE_USER,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        role: 'Administrator',
        department: 'Direction',
        user: 'Deborah Hill',
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        role: '',
        department: '',
      };
    case TOGGLE_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case TOGGLE_DEPARTMENT:
      return {
        ...state,
        department: action.payload,
      };
    case TOGGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
