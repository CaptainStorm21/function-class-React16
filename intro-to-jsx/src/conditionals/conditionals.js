import React, { Component } from "react";
import './styles.css';

//generate a random number from 1 to 10
function getNum() {
  return Math.floor(Math.random() *10)+1;
}

class Conditionals extends React.Component {
  render() {
    const num = getNum();
    let msg;
    if (num === 7){
      msg = <div>
                <h2> You won! </h2>
            </div>
    } else { 
      msg = <p> Sorry! </p>
    }
    return (
      <div className="background">
        <h3> Your number is {num} </h3>
        <p> { num === 7 ? 'Congrads!!!!' : 'Try again!!!'} </p>
        <p> { num === 7 ? <img src="http://google.com/cool.jpg" /> : null } </p>
      <hr/>
         <p> {msg} </p>
      </div>
    )

  }
}

export default Conditionals;