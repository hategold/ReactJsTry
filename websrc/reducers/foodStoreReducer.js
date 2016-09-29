import {handleActions} from 'redux-actions';
import {fooStoreModel} from '../constants/fooStoreModel';

const foodStoreReducer = handleActions({
    'loadStores': (state, {payload}) => {
        state.set('foodStores', payload.foodStores)
    }
    'focusStore': (state, {payload}) => {
        state.merge({ 'foodStore': payload })
    }
})
