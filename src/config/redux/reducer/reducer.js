import { combineReducers } from 'redux';

import productReducer from './productReducer';

const reducer = combineReducers({ productReducer });

export default reducer;
