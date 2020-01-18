import React from "react";

export class Loop extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    const lists = hobbies.map(h => <li>{h}</li>);
    return (
      <div>
        <h5> {name} </h5>
        <ul>
          {hobbies.map(h => (
            <li>{h}</li>
          ))}
        </ul>
        <ul>{lists}</ul>
      </div>
    );
  }
}

export default Loop;
