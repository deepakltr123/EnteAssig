import axios from 'axios'

const BASE_URL = 'https://www.reddit.com/r/memes.json?limit=20'

export const fetchFromAPI = async (url:string) => {
    const { data } = await axios.get(`${BASE_URL}&${url}`);
    return data;
};