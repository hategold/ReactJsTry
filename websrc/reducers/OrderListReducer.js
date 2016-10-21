import {handleActions} from 'redux-actions';
import {OrderState} from '../constants/models/Order';
import {SELECT_ORDER} from '../constants/actionTypes/OrderAction';
import Immutable from 'immutable';

const fakeOrder = Immutable.fromJS({
    'order': {
        orderId: 5,
        promoterId: 4,
        storeId: 55, //?
        totalMoney: '',
        comment: 'hihi',
        dueTime: '2016/6/6'
    },
    'orderList': [
        {
            orderId: 5,
            promoterId: 4,
            storeId: 55, //?
            totalMoney: '',
            comment: 'hihi',
            dueTime: '2016/6/6',
            status: false
        }, {
            orderId: 3,
            promoterId: 4,
            storeId: 55, //?
            totalMoney: '',
            comment: 'jj',
            dueTime: '2017/6/6',
            status: true
        }, {
            orderId: 6,
            promoterId: 2,
            storeId: 5566, //?
            totalMoney: '1880',
            comment: 'jj',
            dueTime: '2016/10/30',
            status: true
        }
    ]
})

export const OrderListReducer = handleActions({
    [SELECT_ORDER]: (state, {payload}) => {
        console.log(state)
        console.log(payload)
        //state.set('order', payload.order)

        return state.set('order', Immutable.fromJS(payload.order));
    }
}, fakeOrder); //OrderState
