import React from 'react';

function Hello() {
  return (
    <div>
      <p> hello, Mary! </p>
      <p> hello, Mary! </p>
      <p> hello, Mary! </p>
    </div>
  );
}

export default Hello;

/*
function component 
historically used for simpler dumb components
no render method
write logic in js function 
just return content 

function Dog (){
  return `<h1> the dog was running away </h1>`
}
*/


/*
can accept props and render
cannot use state and lifecycle methods
with Hooks we can write full featrured function components
*/