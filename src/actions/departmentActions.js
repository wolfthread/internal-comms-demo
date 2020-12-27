/*
This version is to be used with the local state demo application.
 */

import {
  ADD_DEPARTMENT,
  UPDATE_DEPARTMENT,
  DELETE_DEPARTMENT,
  FETCH_DEPARTMENTS,
} from './types';

// CRUD ACTION CREATORS

// GET DEPARTMENTS
export const fetchDepartments = () => async (dispatch) => {
  dispatch({
    type: FETCH_DEPARTMENTS,
  });
};

// ADD department
export const addDepartment = (department) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_DEPARTMENT,
      payload: department,
    });
  } catch (err) {
    console.error(err);
  }
};

// UPDATE department
export const updateDepartment = (department) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_DEPARTMENT,
      payload: department,
    });
  } catch (err) {
    console.error(err);
  }
};

// DELETE department
export const deleteDepartment = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_DEPARTMENT,
      payload: id,
    });
  } catch (err) {
    console.error(err);
  }
};
