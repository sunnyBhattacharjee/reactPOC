import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});


class SageHeader extends Component {
  getTotalItems() {
    return this.props.ShoppingReducer.totalItems ===0 ? <span>
        Your Shopping
        <br />
        Cart is empty
      </span>
     : 
      <span>
        {this.props.ShoppingReducer.totalItems}&nbsp; items in
        <br /> your cart
      </span>
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="sageHeader"
      >
        <div className="col-6 offset-1 navbar-brand" id="searchContainer">
          <form className="input-group">
            <input
              type="text"
              placeholder="~keywords search~"
              className="form-control"
              name="search"
            />
            <button
              type="submit"
              className="border-0 pure-white input-button pure-bg-green search-border-btn"
            >
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        <div className="col-6">
          <div className="row offset-1 ">
            <div>
              <div className="dropdown">
                <button className="dropbtn pure-green">
                  Guest
                  <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <Link to="/account-information">Account Information</Link>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button className="dropbtn">
                  WishList
                  <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <a href="#" className="dropbtn">
                  Cart
                </a>
                <span className="badge py-2 px-3 pure-bg-yellow pure-white nav-badge">
                  {this.getTotalItems()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps
)(SageHeader);
