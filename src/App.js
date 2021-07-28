import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";
import * as actions from "./actions/index";
import Loading from "./components/General/Loading/Loading";
class App extends Component {
  constructor(props) {
    super(props);
    var {
      checkHaveLogin,
      getAllCartRequest,
      getAllUsersRequest,
      getAllProductRequest,
    } = this.props;
    checkHaveLogin();
    getAllUsersRequest();
    getAllProductRequest();
    if (localStorage && localStorage.getItem("user")) {
      getAllCartRequest(JSON.parse(localStorage.getItem("user")));
    } else {
      getAllCartRequest(null);
    }
  }
  render() {
    var { product, carts, users } = this.props;
    return (
      <Router>
        <Switch>
          {product.length > 0 && carts !== null && users !== null ? (
            this.showAllLinks(routes)
          ) : (
            <Loading />
          )}
        </Switch>
      </Router>
    );
  }
  showAllLinks = (routes) => {
    var result = null;
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
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    product: state.product,
    carts: state.carts,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    checkHaveLogin: () => {
      dispatch(actions.checkHaveLogin());
    },
    getAllUsersRequest: () => {
      dispatch(actions.getAllUsersRequest());
    },
    getAllProductRequest: () => {
      dispatch(actions.getAllProductRequest());
    },
    getAllCartRequest: (user) => {
      dispatch(actions.getAllCartRequest(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
