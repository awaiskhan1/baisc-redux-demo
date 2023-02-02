import { bindActionCreators } from 'redux';
import storeManagerService from '../store.service';
import * as GlobalCreators from './global.action';
import globalReducer from './global.reducer';
let actions;
export const getFavourgetGlobalActionsiteActions = () => {
    if (actions) {
        return actions;
    }

    if (storeManagerService?.getStore()?.dispatch) {
        actions = bindActionCreators(GlobalCreators, storeManagerService?.getStore()?.dispatch);
    }

    return actions;
};

/* bindActionCreators Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
 Normally you should just call dispatch directly on your Store instance.If you use Redux with React, react - redux will provide you with the dispatch function so you can call it directly, too.
 The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
*/
// export const getFavourgetGlobalActionsiteActions = bindActionCreators(
//     GlobalCreators,
//     storeManagerService.getStore().dispatch
// );

export { globalReducer };
export const GLOBAL_STORE_KEY = 'GlobalStore';