import Immutable from 'immutable';

export const ProductState = Immutable.fromJS({
    'product': {
        productName: '',
        storeId: '', //?
        salePrice: '',
        pSize: [],
        flavorList: [],
        productFormData: {}
    },
    'productFormData': {
        sizeList: [],
        flavorTypeList: [/*flavorObjs*/]
    },
    'sizePriceObj': {
        saleSize: "",
        salePrice: "",
        productId: ''
    },
    'flavorObjs': [/*flavor*/],
    // 'flavor': {
    //     flavorId: '',
    //     flavorTypeId: '',
    //     value: ''
    // },
    'productList': [],
    'selectedProduct':[]
});
