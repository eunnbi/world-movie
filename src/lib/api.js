import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getData = (type = "", params = "" , additional = "") => (
    axios.get(`${BASE_URL}${type}/movie${params}?api_key=${API_KEY}&language=en-US${additional}`)
)