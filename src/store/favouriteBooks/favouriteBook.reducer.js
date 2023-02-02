import { SET_FAVOURITE_BOOK } from "./favouriteBook.types"

const initialState = {
    favouriteBooks: []
}

const favouriteBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVOURITE_BOOK:
            return { ...state, favouriteBooks: [...state.favouriteBooks, action.books]}

        default:
            return state
    }
}

export default favouriteBookReducer