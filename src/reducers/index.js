import SearchReducer from './SearchReducer';
import UpvotesReducer from './UpvotesReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  SearchReducer,
  UpvotesReducer
});

export default rootReducer;
