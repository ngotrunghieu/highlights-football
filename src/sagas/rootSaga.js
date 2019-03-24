import {fork, all} from 'redux-saga/effects';

import {watchFetchNewHighlights} from './newHighlightSaga';

const rootSaga = function* rootSaga(){
    yield all([
        fork(watchFetchNewHighlights)
    ]);
}

export default rootSaga;
