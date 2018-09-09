import * as types from './actionTypes';

function url() {
  return '../data/authors.json';
}

export function receiveAuthors(authors) {
  return {
    type: types.RECEIVE_AUTHORS,
    authors: authors
  };
}

export function fetchAuthors() {
  return dispatch => {
    return fetch(url(), {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => dispatch(receiveAuthors(json)));
  };
}