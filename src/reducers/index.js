import { combineReducers } from "redux";

import logReducer from "./logs-reducer";
import todoReducer from "./todos-reducer";

const reducers = combineReducers({
  logReducer,
  todoReducer,
});

export default reducers;
