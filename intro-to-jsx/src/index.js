import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './function-component/function-component';
import ClassComponent from './class-component/class-component';
import Conditionals from './conditionals/conditionals';

class App extends Component {

  render() {
    return (
      <div>
        <h1> Hello world </h1>
        <Hello />
        <Conditionals/>
        <ClassComponent/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
