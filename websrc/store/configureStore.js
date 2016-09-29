import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import {default} from '../reducers';

const initialState = Immutable.Map();

export default createStore(
   rootReducer : default,
   initialState,
   applyMiddleware(createLogger({stateTransformer: state => state.toJS()
})));
