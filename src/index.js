import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

/* Mise en place de redux */
import { createStore } from "redux";
import { Provider } from "react-redux"; // contextualiser le store
import reducers from "./reducers/index";

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    {/* Mise en place de redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
