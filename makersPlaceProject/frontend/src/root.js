import React from "react";
import { Provider } from "react-redux";
// import { HashRouter } from "react-router-dom";
import App from "./App";
import Feed from "./components/feed"

const Root = ({ store }) => (
  <Provider store={store}>
    {/* <HashRouter> */}
        <App />
        {/* <Feed /> */}
    {/* </HashRouter> */}
  </Provider>
);

export default Root;
