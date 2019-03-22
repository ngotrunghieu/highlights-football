import {call, all} from 'redux-saga/effects';

import {watchFetchNewHighlights} from './newHighlightSaga';

export default function* rootSaga(){
    yield call(watchFetchNewHighlights);
}