import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {

  state = {
    persons:  [
      { name: 'Alfred', age: '23'},
      { name: 'Karine', age: '11'},
      { name: 'Sebastian ', age: '41'}
    ],
    otherState: 'California - other state'
  }
  //function onclick event handler
  switchNameHandler = () => {
    // manipulating change state on a click
    //DON'T DO THIS = this.state.persons[0].name="Marina Schiller"
    this.setState(
      {
        persons:  [
          { name: 'Alina', age: '83'},
          { name: 'Sascha', age: '93'},
          { name: 'Sebastian ', age: '41'}
        ]
      }
    )

  }

  render() {
    return (
      <div className="App">
        <h1>I am React App</h1>


        <button onClick = { this.switchNameHandler}>Switch the name</button>

        <h3>Dynamically inserted</h3>
        <Person name= { this.state.persons[0].name} age= { this.state.persons[0].age}  />
        <Person name= { this.state.persons[1].name} age= { this.state.persons[1].age}  />
        <Person name= { this.state.persons[2].name} age= { this.state.persons[2].age}  />

        <h3>Manually inserted</h3>
        <Person name="Joseph" age="37">
          My hobbies are : Racing and Skiing
        </Person>
      </div>
    );
  }
}
export default App;
