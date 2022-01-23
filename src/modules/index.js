import { combineReducers } from "redux";
import details from "./details";
import search from "./search";

const rootReducer = combineReducers({
    details,
    search
});

export default rootReducer;