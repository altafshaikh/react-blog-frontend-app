import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>{/* <Route path="/" exact component={Todo} /> */}</Switch>
        </BrowserRouter>
      </div>
    );
  }
}
