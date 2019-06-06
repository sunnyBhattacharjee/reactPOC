import React, { Component } from 'react';
import LOGO from "../assets/logo.PNG";
import FACEBOOK from "../assets/facebook.PNG";
import YOUTUBE from "../assets/youtube.PNG";
import LINKDIN from "../assets/linkdin.PNG";

class SageFooter extends Component {
    state = {  }
    render() { 
        return (
          <div className="sage-footer">
            <div className="container">
              <div className="row mt-3">
                <div className="col-3">
                  <h6 className="font-weight-bold">Navigation</h6>
                  <hr className="m-0" />
                  <ul className="list-unstyled mt-1">
                    <li>
                      <ul className="list-inline list-unstyled row">
                        <li className="list-inline-item col-5">
                          <a href="#">Discover Brand</a>
                        </li>
                        <li className="list-inline-item col-5">
                          <a href="#">Help</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="list-inline list-unstyled row">
                        <li className="list-inline-item col-5">
                          <a href="#">Today's Deals</a>
                        </li>
                        <li className="list-inline-item col-5">
                          <a href="#">Privacy</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="list-inline list-unstyled row">
                        <li className="list-inline-item col-5">
                          <a href="#">Gift Cards</a>
                        </li>
                        <li className="list-inline-item col-5">
                          <a href="#">Terms of Use</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="list-inline list-unstyled row">
                        <li className="list-inline-item col-5">
                          <a href="#">Sell</a>
                        </li>
                        <li className="list-inline-item col-5">
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-2">
                  <h6 className="font-weight-bold">Follow us on</h6>
                  <hr className="m-0" />
                  <ul className="list-unstyled mt-2">
                    <li>
                      <ul className="list-inline list-unstyled row">
                        <li className="col-3 list-inline-item mr-0 pr-0">
                          <a href="#">
                            <img
                              src={FACEBOOK}
                              alt="facebook"
                              className="w-100"
                            />
                          </a>
                        </li>
                        <li className="col-3 list-inline-item mx-0 pr-0">
                          <a href="#">
                            <img
                              src={YOUTUBE}
                              alt="youtube"
                              className="w-100"
                            />
                          </a>
                        </li>
                        <li className="col-3 list-inline-item pr-0">
                          <a href="#">
                            <img
                              src={LINKDIN}
                              alt="linkdin"
                              className="w-100"
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6 className="font-weight-bold">
                    Contact Information
                  </h6>
                  <hr className="m-0 mb-1" />
                  <span>
                    <span className="h6">BRAND NAME</span>
                    <br />
                    <span>
                      <strong>Toll free no:&nbsp;</strong>phone no
                    </span>
                    <br />
                    <span>
                      <strong>Email:&nbsp;</strong>email
                    </span>
                  </span>
                </div>
                <div className="col-4">
                  <div className="row pull-right mt-5">
                    Copyright 2015 to email. All rights
                    reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default SageFooter;