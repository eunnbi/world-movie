import { handleActions } from "redux-actions";
import { getData } from "../lib/api";

const GET_DETAILS = "details/GET_DETAILS";
const GET_DETAILS_SUCCESS = "details/GET_DETAILS_SUCCESS";
const GET_DETAILS_FAILURE = "details/GET_DETAILS_FAILURE";

export const getDetails = (id) => async (dispatch) => {
    dispatch({
        type: GET_DETAILS
    });
    try{
        const response1 = await getData(undefined, `/${id}`);
        const response2 = await getData(undefined, `/${id}/reviews`, `&page=1`);
        dispatch({
            type: GET_DETAILS_SUCCESS,
            details: response1.data,
            reviews: response2.data.results
        })

    }
    catch (e){
        dispatch({
            type: GET_DETAILS_FAILURE
        })
    }
}


const initialState = {
    loading: false,
    details: [],
    reviews: []
}

const details = handleActions(
    {
        [GET_DETAILS] : (state) => ({
            ...state,
            loading: true
        }),
        [GET_DETAILS_SUCCESS] : (state, { details, reviews}) => ({
            loading: false,
            details,
            reviews
        }),
        [GET_DETAILS_FAILURE] : (state) => ({
            ...state,
            loading: false
        })
    },
    initialState
);


export default details;



