import React, { Component } from "react";
import Article from "../newsfeed/Article";

class Feed extends Component {
  render() {
    return (
      <div>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    );
  }
}

export default Feed;
