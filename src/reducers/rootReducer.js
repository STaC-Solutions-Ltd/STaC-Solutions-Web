import {
  combineReducers
} from 'redux';
import posts from './postsReducer';
import authors from './authorsReducer';

const rootReducer = combineReducers({
  posts,
  authors
});

export default rootReducer;