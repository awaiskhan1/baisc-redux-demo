import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk';
import appReducer from "./root.reducer";

const store = configureStore({
    reducer: appReducer(),
    middleware: [reduxThunk],
    devTools: true
});

function initializeStore() {
    const asyncReducers = {};

    /**
     * Remove a async reducer
     *
     * @param {*} key
     */
    const removeReducer = (key) => {
        delete asyncReducers[key];
        store.replaceReducer(appReducer(store.asyncReducers));
    };

    /**
     * Add Async reducer
     *
     * @param {*} key
     * @param {*} asyncReducer
     * @returns
     */
    const addReducer = (key, asyncReducer) => {
        return new Promise((resolve, reject) => {
            try {
                asyncReducers[key] = asyncReducer;
                store.replaceReducer(appReducer(asyncReducers));
                resolve(true);
            } catch (error) {
                reject(error);
            }
        });
    };

    const getStore = () => {
        return store;
    };

    return { addReducer, removeReducer, getStore };
}

const storeManagerService = initializeStore();

export default storeManagerService;
