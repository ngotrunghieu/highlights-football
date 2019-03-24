import {put, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/ActionTypes';
import {Api} from './Api';

function* fetchNewHighlights(data){
    // console.log(data.per_page);
    try{
        const receivedNewHighlights = yield Api.getNewHighlightsFromApi(data.per_page);
        yield put({type: Types.FETCH_NEW_HIGHLIGHT_DATA_SUCCESS, receivedNewHighlights});
    }catch(error){
        yield put({type: Types.FETCH_NEW_HIGHLIGHT_DATA_ERROR, error});
    }
}

export function* watchFetchNewHighlights(){
    yield takeLatest(Types.FETCH_NEW_HIGHLIGHT_DATA, fetchNewHighlights);
}
