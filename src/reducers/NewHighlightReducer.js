import * as Types from '../actions/ActionTypes';

export const NewHighLightReducers = (state = [], action) => {
    switch (action.type) {
        case Types.FETCH_NEW_HIGHLIGHT_DATA_SUCCESS:
            return action.receivedNewHighlights;
        case Types.FETCH_NEW_HIGHLIGHT_DATA_ERROR:
            return [];
        default:
            return [...state];
    }
}