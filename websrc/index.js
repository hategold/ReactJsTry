import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './pages/Main';
import ChooseStore from './pages/ChooseStore'
import CreateOrder from './pages/CreateOrder'
import ShowOrders from './pages/ShowOrders'
import SelectOrder from './pages/SelectOrder'
import SelectItem from './pages/SelectItem'
import store from './store';
import {Router, Route, hashHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}/>
            <Route path="table" component={ChooseStore}/>
            <Route path="createOrder" component={CreateOrder}/>
            <Route path="showActiveOrder" component={ShowOrders}/>
            <Route path="selectOrder/:orderId" component={SelectOrder}/>
            <Route path="itemForm" component={SelectItem}/>

        </Router>
    </Provider>
), document.getElementById('app'));

/* ReactDOM.render( (<Provider store = {store}> <Main/> </Provider>), document.getElementById('app'));
 ReactDOM.render((<PrototypeFS/>), document.getElementById('container'));*/
