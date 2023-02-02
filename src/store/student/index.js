import { bindActionCreators } from "redux";
import storeManagerService from './../store.service';
import * as studentCreators from './student.action';
import studentReducer from './student.reducer';
export * from './student.slice';


/* bindActionCreators Turns an object whose values are action creators, into an object with the same keys, but with every action creator wrapped into a dispatch call so they may be invoked directly.
 Normally you should just call dispatch directly on your Store instance.If you use Redux with React, react - redux will provide you with the dispatch function so you can call it directly, too.
 The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.
*/
export const getStudentActions = () =>  bindActionCreators(
    studentCreators, 
    storeManagerService?.getStore()?.dispatch);



export { studentReducer };
export const STUDENTS_STORE_KEY = 'studentReducer';
