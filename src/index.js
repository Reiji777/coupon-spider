import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import "./index.css";
import App from "./App";

import reducer from "./reducers/index";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, 
document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
