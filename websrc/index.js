import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './pages/Main';
import {PrototypeFS} from './pages/staticFoodStore'
import store from './store';
import {Router, Route, hashHistory} from 'react-router'

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}/>
            <Route path="table" component={PrototypeFS}/>
        </Router>
    </Provider>
), document.getElementById('app'));


/* ReactDOM.render( (<Provider store = {store}> <Main/> </Provider>), document.getElementById('app'));
 ReactDOM.render((<PrototypeFS/>), document.getElementById('container'));*/
