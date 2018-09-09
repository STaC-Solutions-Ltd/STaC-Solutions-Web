import initialState from './initialState';
import {
  FETCH_AUTHORS,
  RECEIVE_AUTHORS
} from '../actions/actionTypes';

export default function authors(state = initialState.authors, action) {
  let newState;
  switch (action.type) {
    case FETCH_AUTHORS:
      console.log('FETCH_AUTHORS Action')
      return action;
    case RECEIVE_AUTHORS:
      newState = action.authors;
      console.log('RECEIVE_AUTHORS Action')
      return newState;
    default:
      return state;
  }
}