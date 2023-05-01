import axios from "axios";

const base_Url = "https://youtube-v31.p.rapidapi.com";
const api_key = import.meta.env.VITE_API_KEY;

const options = {
    params: {
        maxResults: "50"
    },
    headers: {
        "X-RapidAPI-Key": `${api_key}`,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
    }
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${base_Url}/${url}`, options);
    return data;
};
