import initialState from './initialState';
import {
  FETCH_POSTS,
  RECEIVE_POSTS
} from '../actions/actionTypes';

export default function posts(state = initialState.posts, action) {
  let newState;
  switch (action.type) {
    case FETCH_POSTS:
      return action;
    case RECEIVE_POSTS:
      newState = action.posts;
      return newState;
    default:
      return state;
  }
}
