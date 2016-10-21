import 'babel-core/polyfill';
import fetch from 'isomorphic-fetch';
import {createAction} from 'redux-actions';
import {FETCH_SUCCESS, FETCH_FAILURE, FETCH_REQUEST} from '../constants/actionTypes/AjaxAction';

export const fetchRequest = createAction(FETCH_REQUEST)
export const fetchSuccess = createAction(FETCH_SUCCESS)
export const fetchFailure = createAction(FETCH_FAILURE)

export const fetchThunk = (info, path) => {

    return (dispatch) => {
        dispatch(fetchRequest(info))

        return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json =>
        // 这里，使用 API 请求结果来更新应用的 state。
        dispatch(receivePosts(subreddit, json)))
        .catch((error) => {
            dispatch(fetchFailure(error))
        })
    }
}
