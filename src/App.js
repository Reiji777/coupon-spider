import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/actions.js";

import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.init();
  }

  async init() {
    await this.props.actions.fetchInit();
  }

  ShopLogo({coupons}) {
    return coupons.map(elem => (<img className="shopLogo" src={elem.shopLogo} alt={elem.shopName}></img>));
  }

  render() {
    let ShopLogo = this.ShopLogo;
    return (
      <div className="App">
        <header className="App-header">
          <div className="ShopList">
            {this.props.coupons?<ShopLogo coupons={this.props.coupons}></ShopLogo>:""}
          </div>
        </header>
      </div>
    );
  }
}

export default connect(
  (state) => ({ coupons: state.coupons }),
  (dispatch) => ({
    "actions": bindActionCreators(actions, dispatch)
  })
)(App);
