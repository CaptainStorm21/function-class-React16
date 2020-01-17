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
    ]``
  }

  render() {
    return (
      <div className="App">
        <h1>I am React App</h1>
 
        <Person name= { this.state.persons[0].name} age= { this.state.persons[0].age}  />
        <Person name="Joseph" age="37">
          My hobbies are : Racing and Skiing
        </Person>
        {/* <Person name="Joseph" age="37"> My hobbies are : Racing and Skiing </Person> */}
      </div>
    );

    //this is what JSX IS
    // return React.createElement ('div', null, 'h1', "I am React App")
  }
}
export default App;
