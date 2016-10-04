import React from 'react';
import ReactDOM from 'react-dom';
import SelectFoodStorePage from '../components/SelectFoodStorePage'

var FOODSTORES = [{
    storeId: 55,
    storeName: "2pac",
    address: "12233456",
    phoneNumber :"33662255"
}, {
    storeId: 66,
    storeName: "56pac",
    address: "999",
    phoneNumber: "6666"
},{
    storeId: 1,
    storeName: "teatt",
    address: "566",
    phoneNumber :"77777"
}];

export var PrototypeFS = ()=> (<SelectFoodStorePage foodStores={FOODSTORES} />)
