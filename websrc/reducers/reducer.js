import { combineReducers } from 'redux-immutable';
import {foodStoreReducer} from './foodStoreReducer';
import {OrderListReducer} from './OrderListReducer';
import {OrderItemReducer} from './OrderItemReducer';
import {ProductFormReducer} from './ProductFormReducer';


export const mainReducer =  combineReducers({
  foodStoreReducer,
  OrderListReducer,
  OrderItemReducer,
  ProductFormReducer
});
