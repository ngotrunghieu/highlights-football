import {MAIN_URL} from '../constants';

async function fetchDataJson(url) {
    let response;
    try {
        let data = await fetch(url);
        response = await data.json();
    }
    catch (e) {
        response = { err: e.message };
    }
    return response;
}

function* getNewHighlightsFromApi(per_page){
    const new_url = `${MAIN_URL}posts?_embed&per_page=${per_page}`;
    const response = yield fetchDataJson(new_url);
    return response;
}

export const Api = {
    getNewHighlightsFromApi
}
