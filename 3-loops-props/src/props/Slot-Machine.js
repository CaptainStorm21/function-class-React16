import React from "react";

export class SlotMachine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);
    return (
      <div>
        <h3>slot machine </h3>
        <p> {s1} {s2}{s3} </p>
        <p> { winner ? 'Winner' : 'Loser'} </p>
      </div>
    );
  }
}

export default SlotMachine;
