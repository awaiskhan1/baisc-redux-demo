const initialState = {
    someGlobalData: "lorem ipsum dolor sit amet, consectetur adipiscing"
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { num: state.num + 1 }

        case "DECREMENT":
            return { num: state.num - 1 }

        default:
            return state
    }
}

export default globalReducer