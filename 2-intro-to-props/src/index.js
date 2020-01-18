import React, { Component } from 'react';
import { render } from 'react-dom';
import { Hello } from './props/Hello';
import './style.css';

class App extends Component {
 
  render() {
    return (
      <div>
        <h1>Props </h1>
        <Hello to="Alina" from = "Los Angeles" season = "Autumn" />
        <Hello 
          to="Winter" 
          from = "Montana" 
          season="Summer" 
          sum = { 3 + 3}
          num= {4}
          isAvail = {true}
          data={[1,2,3,4]}
          img="http://google.com/funk.jpg" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


// propsis is a reusable component
// it is configurable or customizeable
// example
// HI ---- from ----
//  
