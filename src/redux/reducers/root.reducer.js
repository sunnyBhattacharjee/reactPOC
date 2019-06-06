import { combineReducers } from "redux";
import ShoppingReducer from "./shopping.reducer";
import CheckOutReducer from "./checkout.reducer";
export default combineReducers({
  ShoppingReducer,
  CheckOutReducer
});
