import Immutable from 'immutable';

export const OrderState = Immutable.fromJS({
    'order': {
        orderId: '',
        promoterId: '',
        storeId: '', //?
        totalMoney: '',
        comment: '',
        dueTime: '',
        status:'',
    },
    'orderList':[]
});
