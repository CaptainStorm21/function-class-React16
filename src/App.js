import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {

  state = {
    persons:  [
      { name: 'Alfred', age: '23'},
      { name: 'Karine', age: '11'},
      { name: 'Masha', age: '55'},
      { name: 'Joseph', age: '34'}
    ]
  }
  //function onclick event handler
  switchNameHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>I am React App</h1>

        {/* event handling */}
        {/* //pass a reference to click event */}
        <button onClick = { this.switchNameHandler}>Switch the name</button>

        {/* this will execute a function immediately after the component will load into the dom */}
        {/* <button onClick = { this.switchNameHandler()}>Switch the name</button> */}

        <Person name= { this.state.persons[0].name} age= { this.state.persons[0].age}  />
        <Person name="Joseph" age="37">
          My hobbies are : Racing and Skiing
        </Person>
      </div>
    );
  }
}
export default App;
