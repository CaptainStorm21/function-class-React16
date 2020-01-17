import React from "react";

//function name with lower captionSide
const person = props => {
  return (
    <div>
      {/*  return */}
      {/* <p> I m a Person. I am {Math.floor(Math.random() * 30)} years old. </p >  */}
      <p>
        I m a {props.name}. I am {props.age}years old.
      </p>
      <p>
        {/* outputting children of props */} {props.children}
      </p>
    </div>
  );
};

export default person;
