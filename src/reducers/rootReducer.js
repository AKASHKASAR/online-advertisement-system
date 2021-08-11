import { combineReducers } from "redux";
// import userReducer from "./user/userReducer";
import authReducer from "./authReducer";
import catReducer from "./catReducer";
import productReducer from "./productReducer"

const rootReducer = combineReducers({
  
 
  auth: authReducer,
  cat: catReducer,
  product: productReducer,

});

export default rootReducer;
