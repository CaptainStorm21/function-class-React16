import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props =>{
  const {
    title = "Welcome to React"
  } = props;

  return (
    <header className="App-header">
      <h3 className = "App-title"> { title } </h3>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
