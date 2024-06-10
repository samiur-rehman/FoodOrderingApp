import React, { Component } from "react";
import userContext from "./utils/userContext";

export default class Contact extends Component {
  render() {
    return (
      <>
        <h1>
          Contact to
          <userContext.Consumer>
            {({ loggedInUser }) => <span> {loggedInUser}</span>}
          </userContext.Consumer>
        </h1>
        <h1>This Contact Us Section of Namaste React Series</h1>
      </>
    );
  }
}
