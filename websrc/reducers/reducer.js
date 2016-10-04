import { combineReducers } from 'redux-immutable';
import {foodStoreReducer} from './foodStoreReducer';


export const mainReducer =  combineReducers({
  foodStoreReducer
});
