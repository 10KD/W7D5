import { merge } from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export const sessionReducer = (state = { currentUser: null, errors: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export const sessionErrorsReducer = () => {

};
