import * as React from "react";
import * as ReactDOM from "react-dom";

import HomePage from "./components/HomePage";

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById("app")
    );
};

render(HomePage);

declare var module: any;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/HomePage', () => {
    render(HomePage)
  });
}