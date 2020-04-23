import React from "react";
import { render } from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import store from "./common/redux/store";

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(app, document.getElementById("root"));
