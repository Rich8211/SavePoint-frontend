const reducer = (state, action) => {
    switch (action.type) {
        case "SET_MODAL":
            return {
                ...state, toggleModal: action.payload
            }
         
        default:
            return state
    }
}

export default reducer;