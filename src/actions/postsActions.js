import * as types from './actionTypes';

function url() {
  return '../data/posts.json';
}

export function receivePosts(posts) {
  return {
    type: types.RECEIVE_POSTS,
    posts
  };
}

export function fetchPosts() {
  return dispatch => fetch(url(), {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)));
}
