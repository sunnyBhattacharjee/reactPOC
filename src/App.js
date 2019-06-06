import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SageNav from "./components/sageNav.jsx";
import SageHeader from "./components/sageHeader.jsx";
import SageHome from "./components/sageHome.jsx";
import SageFooter from "./components/sageFooter.jsx";
import SageCheckOut from "./components/sageCheckOut";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



class App extends Component {


  render() {
    return (
      <React.Fragment>
        <Router>
          <SageNav />
          <SageHeader />
          <main className="container">
            <Switch>
              <Route path="/account-information" component={SageCheckOut} />
              <Route exact path="/" component={SageHome} />
            </Switch>
          </main>
          <SageFooter />
        </Router>
      </React.Fragment>
    );
  }

 
}

export default connect(
)(App);
