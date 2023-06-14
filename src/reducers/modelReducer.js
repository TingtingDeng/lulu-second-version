import {modalActionType} from "../helper";

const initState = {
    addToBagPage: false,
    isLoading: false
}

export const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case modalActionType.TOGGLE_ADD_TO_BAG_PAGE:
            console.log(`[reducer]toggle add to bag page`)
            return {...state, addToBagPage: !state.addToBagPage}

        case modalActionType.IS_LOADING:
            console.log(action.payload)
            return {...state, isLoading: action.payload}

        default:
            return state
    }
}