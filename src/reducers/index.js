
import {combineReducers} from "redux";
import {modalReducer} from "./modelReducer";
import {tokenReducer} from "./tokenReducer";
import {fetchReducer} from "./fetchReducer";

export default combineReducers(
    {
      modalReducer,
        tokenReducer,
        fetchReducer,
    }
)