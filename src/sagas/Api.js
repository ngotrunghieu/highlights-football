const url = 'https://highlightsfootball.com/wp-json/wp/v2/posts';

function* getNewHighlightsFromApi(_url){
    let newURL = `${url}/${_url}`
    const response = yield fetch(newURL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });

    const newHighlights = yield response.status === 200 ? JSON.parse(response._bodyInit) : [];
    console.log(newHighlights);
    return newHighlights;
}

export const Api = {
    getNewHighlightsFromApi
}
