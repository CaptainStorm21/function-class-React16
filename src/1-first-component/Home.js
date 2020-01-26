import React, { Component } from "react";
import "../App.css";

class Home extends Component {
    constructor() {
        super();
        // We need to define super() at the beginning of the 
      // constructor to have access to 'this'
        this.state = {
            description: "this is First Component"
        }
    }
    render() {
        setTimeout(() => {
          this.setState({
            description: 'Rendered delay' // Here we update the value of the state
          });
        }, 1000);
        console.log('Name:', this.state.description);
    return (
      <div className="body">
        <p className="text-left"> {this.state.description} </p>
      </div>
    );
  }
}
export default Home;
