import React, { Component } from "react";

function getMood() {
  const mood = [ 'Mad', 'Happy', 'Angry', 'Silly', 'Quiet'];
  return mood [Math.floor(Math.random()*mood.length)];
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h3> Output of 2*3 is {2 * 3}</h3> 
        <span>
          My Current mood is { getMood() }
        </span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWt1w0gmX0OtrNEcbufOu0bgcTWNzTTx31DgQAO__08GoHMjIf&s" />
      </div>
    );
  }
}

export default ClassComponent;

// class component
// traditional react componentwith logic in js class
// must include render method

/*
class Dog extends React.Component{
  render(){
    return `<h1> Returning your dog <h1>`
  }
}
*/
