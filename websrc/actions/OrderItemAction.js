import {createAction} from 'redux-actions';
import {DELETE_ORDERITEM} from '../constants/actionTypes/OrderAction';
import {LOAD_MENU, PICK_PRODUCT,SUBMIT_ITEM_FORM} from '../constants/actionTypes/FormAction';

export const deleteOrderItem = createAction(DELETE_ORDERITEM);
export const loadStoreMenu = createAction(LOAD_MENU);
export const pickProduct = createAction(PICK_PRODUCT);
export const submitItemForm = createAction(SUBMIT_ITEM_FORM);
