import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppComponentConnected } from "./app";
import "./index.scss";
import registerServiceWorker from "./register-service-worker";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <AppComponentConnected />
  </Provider>,
  document.getElementById("root") as HTMLElement,
);

registerServiceWorker();
