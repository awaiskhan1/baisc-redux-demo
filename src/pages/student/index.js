
import Student from './student';
import { studentReducer, STUDENTS_STORE_KEY } from '../../store/student';
import withAsyncReducer from '../../store/withAsyncReducer';


export default withAsyncReducer(STUDENTS_STORE_KEY, studentReducer)(Student);