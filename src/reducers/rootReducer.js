import { combineReducers } from "redux";
// import userReducer from "./user/userReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
  
 
  auth: authReducer,
});

export default rootReducer;