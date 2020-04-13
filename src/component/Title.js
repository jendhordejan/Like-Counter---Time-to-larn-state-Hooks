import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { content } = this.props;
    return <h1>{content}</h1>;
  }
}
