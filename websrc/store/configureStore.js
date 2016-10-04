import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import Immutable from 'immutable';
import {mainReducer} from '../reducers/reducer';

const initialState = Immutable.Map();

export default createStore(
  mainReducer,
  initialState,
  applyMiddleware(createLogger({
    stateTransformer: state => state.toJS()
})));
