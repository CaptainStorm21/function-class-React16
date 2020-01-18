import React from "react";

export class Hello extends React.Component {
  render() {
    const props1 = this.props;
    console.log(this.props);
    let numbers = "!".repeat(this.props.num);
    console.log(numbers)
    // this.props.from = 'Blue';
    //cannot and will not work because it is read only
    //this.props.age = 18
    //this will not work either because it is not extendable.
    return (
      <div>
        <p>
          {this.props.to} from {this.props.from}!
        </p>
        <p>My Favorite season is {props1.season} {numbers}</p>
        <img src = {this.props.img}/>
      </div>
    );
  }
}

export default Hello;

//check the console
//to alina from los angeles
//to winter from montana
//properties are there for configuring components
// propertiess are immutable