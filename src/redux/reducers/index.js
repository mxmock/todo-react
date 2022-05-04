import logReducer from "./logs";
import todoReducer from "./todos";
import { combineReducers } from "redux";

const reducers = combineReducers({
  logReducer,
  todoReducer,
});

export default reducers;
