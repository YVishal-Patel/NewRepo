import { combineReducers } from "redux";
import { UserDataReducer } from "./UserDataReducer";

const allReducer = combineReducers({
 userReducer: UserDataReducer
})

export default allReducer;