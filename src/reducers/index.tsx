import ApplicationReducer from "./ApplicationReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
   application : ApplicationReducer
})

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer