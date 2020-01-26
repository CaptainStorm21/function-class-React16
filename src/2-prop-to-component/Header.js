import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  // Here you can define your PropTypes.
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { 
      title = "REACT" 
    } = this.props;

    return (
      <header>
        <h1 >{title}</h1>
      </header>
    );
  }
}

export default Header;
