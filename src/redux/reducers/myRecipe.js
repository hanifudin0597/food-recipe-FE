const initialState = {
    data: [],
    isLoading: false,
    isError: false,
}

const getMyRecipeReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LIST_MY_RECIPE_PENDING":
            return { ...state, isLoading: true }
        case "GET_LIST_MY_RECIPE_FULFILLED":
            return { ...state, isLoading: false, isError: false, data: action.payload.data.data }
        case "GET_LIST_MY_RECIPE_REJECTED":
            return { ...state, isLoading: false, isError: true }

        default:
            return state;
    }
}

export default getMyRecipeReducers