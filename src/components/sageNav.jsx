import React, { Component } from "react";
import LOGO from "../assets/logo.PNG";
import { Link } from "react-router-dom";

class SageNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom p-0">
        <div className="col-2 offset-1 navbar-brand">
          <Link to="/">
            <span>Brand Name</span>
          </Link>
        </div>
        <div className="col-9 nav-border-top-layer p-0 m-0">
          <div className="nav-border-bottom-layer">
            <div className="row offset-3  mt-5">
              <div className="ml-3">
                Discover <span className="nav-menu-highlight">Brand</span>
              </div>
              <div className="mx-4 active">Today's Deals</div>
              <div>Gift Cards</div>
              <div className="mx-4">Sell</div>
              <div>Help</div>
              <div className="mx-4">Privacy</div>
              <div>Terms of Use</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SageNav;
