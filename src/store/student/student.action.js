import { SET_STUDENT } from './student.types';

export const setStudent = (student) => ({
    type: SET_STUDENT,
    student
});
