import initialState from './initialState';
import {
  FETCH_POSTS,
  RECEIVE_POSTS
} from '../actions/actionTypes';

export default function posts(state = initialState.posts, action) {
  let newState;
  switch (action.type) {
    case FETCH_POSTS:
      console.log('FETCH_POSTS Action')
      return action;
    case RECEIVE_POSTS:
      newState = action.posts;
      console.log('RECEIVE_POSTS Action')
      return newState;
    default:
      return state;
  }
}