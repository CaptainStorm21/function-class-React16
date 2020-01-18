import React from "react";

export class DefaultProp extends React.Component {
  static defaultProps = {
    from : 'Default prop'
  }
  render() {
    return (
      <div>
        <p> TO: {this.props.to}</p>
        <p> FROM: {this.props.from}</p>
      </div>
    );
  }
}

export default DefaultProp;
