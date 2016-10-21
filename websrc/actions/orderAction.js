import {createAction} from 'redux-actions';
import {RESET_FORM} from '../constants/actionTypes/FormAction';
import {SELECT_ORDER} from '../constants/actionTypes/OrderAction';

export const loadOrder = createAction('loadOrder');
export const focusOrder = createAction('focusOrder');
export const createOrder = createAction('createOrder');
export const updateOrder = createAction('createOrder');
export const deleteOrder = createAction('deleteOrder');
export const resetForm = createAction(RESET_FORM);
export const selectOrder = createAction(SELECT_ORDER);
