import {handleActions} from 'redux-actions';
import {ProductState} from '../constants/models/Product';
import Immutable from 'immutable';
import {PICK_PRODUCT, SUBMIT_ITEM_FORM} from '../constants/actionTypes/FormAction';

const FakeProductState = Immutable.fromJS({
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
        flavorTypeList: [/*flavorObjs*/
            ]
    },
    'sizePriceObj': {
        saleSize: "",
        salePrice: "",
        productId: ''
    },
    'flavorObjs': [/*flavor*/
        ],
    'productList': [
        {
            productName: '脆皮雞排',
            storeId: '55', //?
            salePrice: '50',
            pSize: ['onesize'],
            flavorList: [
                '原味', '不辣'
            ],
            productFormData: {
                sizeList: [
                    {
                        saleSize: 'onesize',
                        salePrice: '50',
                        productId: '9'
                    }
                ],
                flavorTypeList: [
                    [
                        '原味',
                        '胡椒',
                        '香蒜',
                        '起士',
                        '泡菜',
                        '咖哩',
                        '梅子'
                    ],
                    ['不辣', '小辣', '中辣', '大辣']
                ]
            }
        }, {
            productName: '脆皮百頁豆腐',
            storeId: '55', //?
            salePrice: '20',
            pSize: ['onesize'],
            flavorList: [
                '原味', '不辣'
            ],
            productFormData: {
                sizeList: [
                    {
                        saleSize: 'onesize',
                        salePrice: '50',
                        productId: '33'
                    }
                ],
                flavorTypeList: [
                    [
                        '原味',
                        '胡椒',
                        '香蒜',
                        '起士',
                        '泡菜',
                        '咖哩',
                        '梅子'
                    ],
                    ['不辣', '小辣', '中辣', '大辣']
                ]
            }
        }, {
            productName: '脆皮雞塊',
            storeId: '55', //?
            salePrice: '50',
            pSize: ['onesize'],
            flavorList: [
                '原味', '不辣'
            ],
            productFormData: {
                sizeList: [
                    {
                        saleSize: 'onesize',
                        salePrice: '50',
                        productId: '10'
                    }
                ],
                flavorTypeList: [
                    [
                        '原味',
                        '胡椒',
                        '香蒜',
                        '起士',
                        '泡菜',
                        '咖哩',
                        '梅子'
                    ],
                    ['不辣', '小辣', '中辣', '大辣']
                ]
            }
        }, {
            productName: '可樂',
            storeId: '55', //?
            salePrice: '20',
            pSize: ['onesize'],
            flavorList: [],
            productFormData: {
                sizeList: [
                    {
                        saleSize: 'onesize',
                        salePrice: '20',
                        productId: '62'
                    }
                ]
            }
        }
    ],
    'selectedProduct': []
});

export const ProductFormReducer = handleActions({
    [PICK_PRODUCT]: (state, {payload}) => {
        console.log("hihi");
        return state;
    },
    [SUBMIT_ITEM_FORM]: (state, {payload}) => {
        console.log("hi2hi2");
        return state;
    }
}, FakeProductState); //ProductState
