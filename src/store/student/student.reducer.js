import { SET_STUDENT } from "./student.types"

const initialState = {
    students: []
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STUDENT:
            return { ...state, students: [...state.students, action.student]}

        default:
            return state
    }
}

export default studentReducer