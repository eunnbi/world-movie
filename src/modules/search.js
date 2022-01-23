import { handleActions } from "redux-actions";
import { getData } from "../lib/api";


const SEARCH_MOVIES = "search/SEARCH_MOVIES";
const SEARCH_MOVIES_SUCCESS = "search/SEARCH_MOVIES_SUCCESS";
const SEARCH_MOVIES_FAILURE = "search/SEARCH_MOVIES_FAILURE";
const INITIALIZE_MOVIES = "search/INITIALIZE_MOVIES";

export const initialMovies = () => ({
    type: INITIALIZE_MOVIES
})

export const searchMovies = (page, query) => async (dispatch) => {
    if (query === ""){
        dispatch(initialMovies());
    }
    else{
        dispatch({
            type: SEARCH_MOVIES
        });
        try{
            const response = await getData("/search", undefined, `&query=${query}&page=${page}&include_adult=false`);
            dispatch({
                type: SEARCH_MOVIES_SUCCESS,
                movies: response.data.results
            })

        }
        catch (e){
            dispatch({
                type: SEARCH_MOVIES_FAILURE
            })
        }    
    }
    
}


const initialState = {
    loading: false,
    movies: []
};


const search = handleActions(
    {
        [INITIALIZE_MOVIES] : () => ({
            loading: false,
            movies: [],
            query: ""
        }),
        [SEARCH_MOVIES] : (state) => ({
            ...state,
            loading: true
        }),
        [SEARCH_MOVIES_SUCCESS] : (state, { movies }) => ({
            loading: false,
            movies
        }),
        [SEARCH_MOVIES_FAILURE] : (state) => ({
            ...state,
            loading: false
        }),
    },
    initialState
);

export default search;