// Mise en place de redux
import reducers from "../reducers";
import middlewares from "../middlewares";
import { legacy_createStore as createStore } from "redux";

const configureStore = () => {
  return {
    ...createStore(reducers, middlewares),
  };
};

export default configureStore;
