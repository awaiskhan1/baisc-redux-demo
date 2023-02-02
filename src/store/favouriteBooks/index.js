import { bindActionCreators } from "redux";
import storeManagerService from './../store.service';
import * as favoriteBookCreators from './favouriteBook.action';
import favouriteBookReducer from './favouriteBook.reducer';
export * from './favouriteBook.slice';
let actions;

export const getFavouriteActions = () => {
    if (actions) return actions;
    /* bindActionCreators Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
 Normally you should just call dispatch directly on your Store instance.If you use Redux with React, react - redux will provide you with the dispatch function so you can call it directly, too.
 The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
*/
    if (storeManagerService?.getStore()?.dispatch) 
        actions = bindActionCreators(favoriteBookCreators, storeManagerService?.getStore()?.dispatch);
    
    return actions;
};


export { favouriteBookReducer };
export const FAVOURITE_BOOKS_STORE_KEY = 'favouriteBook';
