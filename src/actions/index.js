import * as Types from './ActionTypes';

export const actFetchNewHighlightData = (per_page) => ({
    type: Types.FETCH_NEW_HIGHLIGHT_DATA,
    per_page
});
