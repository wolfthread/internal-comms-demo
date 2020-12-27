/*
This version is to be used with the local state demo application.
 */

import {
  SIGN_IN,
  SIGN_OUT,
  TOGGLE_ROLE,
  TOGGLE_DEPARTMENT,
  TOGGLE_USER,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const toggleRole = (role) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_ROLE,
      payload: role,
    });
  } catch (err) {
    console.error(err);
  }
};

export const toggleDepartment = (department) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_DEPARTMENT,
      payload: department,
    });
  } catch (err) {
    console.error(err);
  }
};

export const toggleUser = (user) => (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_USER,
      payload: user,
    });
  } catch (err) {
    console.error(err);
  }
};
