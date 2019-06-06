import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";


import {
  shoppingDecrementAction,
  shoppingIncrementAction,
  shoppingSetAction
} from "../redux/actions/shopping.action";


const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  setShoppingItems: items => dispatch(shoppingSetAction(items)),
  increment: index => dispatch(shoppingIncrementAction(index)),
  decrement: index => dispatch(shoppingDecrementAction(index))
});



class SageHome extends Component {
  componentWillMount() {
    axios
      .get("http://www.mocky.io/v2/5cebe07233000070006d7816")
      .then(result => {
        this.props.setShoppingItems(result.data);
      })
      .catch(error => this.props.setShoppingItems([]));
  }

  handleIncrement = index => {
    this.props.increment(index);
  };

  handleDecrement = index => {
    this.props.decrement(index);
  };

  render() {
    const { shoppingItems } = this.props.ShoppingReducer;
    return (
      <div className="card my-5 p-0  pure-bg-grey">
        <div className="cardheader font-weight-bold h5 pure-bg-yellow pure-white pt-2 m-0">
          <div className="card-title px-2">
            <span className="pure-bg-dark-yellow form-control-sm  m-2">
              <i className="fa fa-caret-down" />
            </span>
            Category
            <i className="fa fa-angle-double-right mx-1" /> Home Automation
          </div>
        </div>
        <div className="card-body">
          <div className="card-text border pure-bg-white py-3 px-5 ">
            <table className="table">
              <thead>
                <tr className="h6">
                  <td className="border-0">Items 1-1 of 3 total</td>
                  <td className="border-0">
                    Sort by: Relevance | Name | Newest | Price
                  </td>
                  <td className="border-0">
                    Show
                    <span className="bg-light form-control-sm px-2 py-2 mt-1 m-1">
                      10 <i className="fa fa-caret-down ml-1" />
                    </span>
                    Per Pages
                  </td>
                </tr>
              </thead>
              <tbody>
                {shoppingItems.map((value, index) => {
                  return (
                    <tr className="h6" key={index}>
                      <td>
                        <img
                          src={this.getImage(value.img)}
                          alt="img here"
                          className="w-100"
                        />
                      </td>
                      <td className="w-50">
                        <h6>
                          <strong>{value.title}</strong>
                        </h6>
                        <p className="w-75">{value.desc}</p>
                        <p className="pure-yellow">
                          Additional Information
                        </p>
                        <p>
                          <strong className="mr-3">Unit Of Measure:</strong>
                          {value.measureUnit}
                        </p>
                        <p>
                          <strong className="mr-3">SKU:</strong>
                          {value.sku}
                        </p>
                      </td>
                      <td className="pt-4">
                        <ul className="list-unstyled">
                          <li className="input-group">
                            <strong className="pl-5 mr-3 mt-1">Qty:</strong>
                            <span className="bg-light form-control-sm px-3 py-2 mt-1">
                              {value.count}
                            </span>
                            <ul className="list-unstyled pull-right w-25 input-button">
                              <li>
                                <i
                                  className="fa fa-caret-up"
                                  onClick={() =>
                                    this.handleIncrement(index)
                                  }
                                />
                              </li>
                              <li>
                                <i
                                  className="fa fa-caret-down"
                                  onClick={() =>
                                    this.handleDecrement(index)
                                  }
                                />
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p className="pl-5 mt-3">
                              <strong className="mr-3">Price:</strong>$
                              {value.price}
                            </p>
                          </li>
                          <li>
                            <i className="fa fa-2x mr-5 fa-cart-plus pull-right pure-yellow" />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="h6">
                  <td>Items 1-1 of 3 total</td>
                  <td>Sort by: Relevance | Name | Newest | Price</td>
                  <td>
                    Show
                    <span className="bg-light form-control-sm px-2 py-2 mt-1 m-1">
                      10 <i className="fa fa-caret-down ml-1" />
                    </span>
                    Per Pages
                    <Link
                      to="/account-information"
                      className="btn btn-sm btn-link"
                    >
                      Next
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }

  getImage(path) {
    return require("../assets/" + path);
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SageHome);

