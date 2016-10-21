import {handleActions} from 'redux-actions';
import {ItemsInOrder} from '../constants/models/ItemsInOrder';
import {DELETE_ORDERITEM} from '../constants/actionTypes/OrderAction';
import {LOAD_MENU} from '../constants/actionTypes/FormAction';
import Immutable from 'immutable';

const fakeItemsInOrder = Immutable.fromJS({
    "item": {
        productId: 33,
        productName: "GG",
        orderId: 1,
        peopleId: 1,
        peopleName: "Tim",
        quantity: 1,
        salePrice: 55,
        comment: "GpieOiSHE",
        flavorList: [
            "辣", "胡椒"
        ],
        pSize: "big"
    },

    "itemList": [
        {
            productId: 33,
            productName: "GG",
            orderId: 1,
            peopleId: 1,
            peopleName: "Tim",
            quantity: 1,
            salePrice: 55,
            comment: "GpieOiSHE",
            flavorList: [
                "辣", "胡椒"
            ],
            pSize: "big"
        }, {
            productId: 22,
            productName: "Drink",
            orderId: 1,
            peopleId: 2,
            peopleName: "Tim2",
            quantity: 1,
            salePrice: 35,
            comment: "gginin",
            flavorList: [
                "no ice", "half sugar", "no milk"
            ],
            pSize: "M"
        }
    ],
    "store": {
        storeId: "5"
    }
});

export const OrderItemReducer = handleActions({
    [DELETE_ORDERITEM]: (state, {payload}) => {
        console.log(state);
        console.log(payload);
        // console.log(payload)
        // state.set('order', payload.order)
        return state;
    },
    [LOAD_MENU]: (state, {payload}) => {
        console.log(state.get('store'));
        console.log(payload);
        // console.log(payload)
        // state.set('order', payload.order)
        return state;
    }
}, fakeItemsInOrder); //ItemsInOrder
