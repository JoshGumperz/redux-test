import counterReducer from "./counter";
import apiReducer from "./apiCall";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    userData: apiReducer
})

export default allReducers