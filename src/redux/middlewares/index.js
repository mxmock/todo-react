import thunk from "redux-thunk";
import logsMiddleware from "./logs";
import { applyMiddleware } from "redux";

const middlewares = applyMiddleware(thunk, logsMiddleware);

export default middlewares;
