import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root.reducer";
import { globalState } from "../constants/globalState";


export default function configureStore(initialState = globalState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
