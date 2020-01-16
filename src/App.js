import React, { Component } from "react";

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>I am React App</h1>
      </div>
    )

    //this is what JSX IS
    // return React.createElement ('div', null, 'h1', "I am React App")
  }
};
export default App;
