import {combineReducers} from "redux"
import urlReducer from "./url";

const rootReducer= combineReducers({
    url:urlReducer,
});
export default rootReducer;