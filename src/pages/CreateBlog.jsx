import React, { Component } from "react";
import Navigation from "../components/Navbar";

export default class CreateBlog extends Component {
  render() {
    return (
      <div>
        <Navigation isLoggedIn={true} />

        <h1>create blog</h1>
      </div>
    );
  }
}
