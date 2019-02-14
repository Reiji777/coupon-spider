import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.scss";
class ShopPage extends Component {
  setTitle(title) {
    document.title = title;
  }

  ShowCouponList({ shop }) {
    let coupons = shop.couponList.map((coupon, index) => {
      return (
        <div key={index} className="coupon">
          {/* {shop.shopName} */}
          <div className="couponImg">
            <img className="couponImg" src={coupon.imgSrc} alt={index} />
          </div>
          <div className="couponText">
            <p dangerouslySetInnerHTML={{__html: coupon.item}}></p>
          </div>
        </div>
      );
    });
    return <div className="couponList">{coupons}</div>;
  }

  render() {
    this.setTitle(this.props.match.params.shopName);
    let { ShowCouponList } = this;
    let [shop] = this.props.coupons.filter(
      shop => shop.shopName === this.props.match.params.shopName
    );
    return <ShowCouponList shop={shop} />;
  }
}

export default connect(
  state => ({ coupons: state.coupons }),
  null
)(ShopPage);
