import {put, takeEvery } from 'redux-saga/effects';
import * as Types from '../actions/ActionTypes';
import {Api} from './Api';

function* fetchNewHighlights(){
    const url = 'posts'
    try{
        const receivedNewHighlights = yield Api.getNewHighlightsFromApi(url);
        console.log(receivedNewHighlights);
        yield put({type: Types.FETCH_NEW_HIGHLIGHT_DATA_SUCCESS}, receivedNewHighlights);
    }catch(error){
        yield put({type: Types.FETCH_NEW_HIGHLIGHT_DATA_ERROR, error});
    }
}

export function* watchFetchNewHighlights(){
    yield takeEvery(Types.FETCH_NEW_HIGHLIGHT_DATA, fetchNewHighlights);
}
