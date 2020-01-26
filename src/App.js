import React, { Component } from "react";
import "./App.css";

import Home from "./1-first-component/Home";
import Header from "./2-prop-to-component/Header";
import DidMount from './3-componentDidMount/DidMount';

import Footer from './Footer/Footer';
// import Content from './Content/Content';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Learning"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="bg-dark App-header">
          <Header/>
          {/* <h4 className="text-white text-center p-2">
            {this.state.userName} 
            <Header title="React 16" />
          </h4> */}
        </header>

        {/* content */}
        {/* <Content> */}
        <div>
          <Home/>
          <DidMount/>
        </div>
        {/* </Content> */}

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
