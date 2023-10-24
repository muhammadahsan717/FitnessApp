export const exerciseOptions = {
    method: 'GET',
    params: {limit: '1000'},
    headers: {
        'X-RapidAPI-Key': '454c2a4ae6msh2da73306fdfd2e2p1ba445jsn7c992de627c9',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '454c2a4ae6msh2da73306fdfd2e2p1ba445jsn7c992de627c9',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}

export const fetchData = async(url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}

//454c2a4ae6msh2da73306fdfd2e2p1ba445jsn7c992de627c9