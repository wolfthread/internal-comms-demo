/*
This version is to be used with the local state demo application.
 */

import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from './types';

// CRUD ACTION CREATORS

// GET users
export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USERS,
  });
};

// ADD user
export const addUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_USER,
      payload: user,
    });
  } catch (err) {
    console.error(err);
  }
};

// UPDATE user
export const updateUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER,
      payload: user,
    });
  } catch (err) {
    console.error(err);
  }
};

// DELETE user
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};
