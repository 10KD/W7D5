const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
const RECEIVE_ERRORS = "RECEIVE_ERRORS";


import React from 'react';
import * as ApiUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const login = (user) => dispatch => (
  ApiUtil.login(user).then(user2 => dispatch(receiveCurrentUser(user2)),
  err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  ApiUtil.logout.then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => (
  ApiUtil.signup(user).then(user2 => dispatch(receiveCurrentUser(user2)),
  err => (dispatch(receiveErrors(err.responseJSON))))
);
