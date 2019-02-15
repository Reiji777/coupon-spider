import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/actions.js";
import "./App.scss";
import ShopPage from "./components/shopPage";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";
// const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);
    props.actions.fetchInit();
    this.ShopList = this.ShopList.bind(this);
    this.showShopLogo = this.showShopLogo.bind(this);
  }

  ShopList({ coupons }) {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return coupons.map(
                (elem) => {
                if (elem.couponList.length) {
                  return this.showShopLogo(elem);
                } else {
                  return null;
                }
              });
            }}
          />
          <Route path="/:shopName" component={ShopPage} />
        </div>
      </Router>
    );
  }

  showShopLogo(elem) {
    let { shopName, shopLogo } = elem;
    return (
      <Link key={shopName} to={`/${shopName}`}>
        <img className="shopLogo" src={shopLogo} alt={shopName} />
      </Link>
    );
  }

  render() {
    let { ShopList } = this;
    return (
      <div className="App">
        <div className="shopList">
          {this.props.coupons ? <ShopList coupons={this.props.coupons} /> : ""}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ coupons: state.coupons }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
