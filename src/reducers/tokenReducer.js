import {actionType} from "../helper";
import actions from "../actions";

const initState = {
    tokenData: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    isLogin: false,
    errorMsg: null,
}

export const tokenReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.UPDATE_TOKEN:
            console.log(`[reducer] update token`, action.payload)
            return {...state, tokenData: action.payload}
        case actionType.UPDATE_IS_LOGIN:
            console.log(`[reducer] update is login`, action.payload)
            return {...state, isLogin: action.payload}
        case actionType.UPDATE_ERROR_MSG:
            console.log(`[reducer] update error msg`, action.payload)
            return {...state, errorMsg: action.payload}
        default:
            return state
    }
}