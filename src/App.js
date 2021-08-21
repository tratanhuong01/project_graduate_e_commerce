import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainApp from "./MainApp";
import routes from "./routes";

function App(props) {
  const showAllLinks = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return result;
    }
  };

  return (
    <Router>
      <MainApp>
        <Switch>{showAllLinks(routes)}</Switch>
      </MainApp>
    </Router>
  );
}

export default App;
