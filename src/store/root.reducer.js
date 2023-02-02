import { combineReducers } from "redux";
import {favouriteBookReducer} from './favouriteBooks';
import { globalReducer } from "./global";



// combining two reducers into a single reducer
const appReducer = (asyncReducers) => {
    return combineReducers({
        globalReducer,
        favouriteBookReducer,
        ...asyncReducers
    });
};

export default appReducer;