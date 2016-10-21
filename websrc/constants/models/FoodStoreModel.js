import Immutable from 'immutable';

export const FoodStoreState = Immutable.fromJS({
    'foodStores': [],
    'foodStore': {
        storeId: '',
        storeName: '',
        address: '',
        phoneNumber :'',
    }
});
