import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import MainApp from "./MainApp";
import routes from "./routes";
import * as Config from "./constants/Config";

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
    }
    return result;
  };
  const Interfaces = () => {
    const location = useLocation();
    const data = showAllLinks(routes);
    return location.pathname === Config.PAGE_PAYMENT ||
      location.pathname.indexOf(Config.PAGE_ADMIN) !== -1 ? (
      <Switch>{data}</Switch>
    ) : (
      <MainApp>
        <Switch>{data}</Switch>
      </MainApp>
    );
  };
  return (
    <Router>
      <Interfaces />
    </Router>
  );
}

export default App;
