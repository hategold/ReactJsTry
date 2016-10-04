import {handleActions} from 'redux-actions';
import {FoodStoreState} from '../constants/foodStoreModel';

export const foodStoreReducer = handleActions({
    'loadStores': (state, {payload}) => {
        state.set('foodStores', payload.foodStores)
    },
    'focusStore': (state, {payload}) => {
        console.log(state);
        console.log(payload);
        console.log(state.merge({'foodStore': payload}))
        return state.merge({'foodStore': payload})
    }
}, FoodStoreState);
