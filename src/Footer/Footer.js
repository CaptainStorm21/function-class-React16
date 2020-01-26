import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="bg-dark text-white p-2 ">
          &copy; CaptStorm {new Date().getFullYear()}
        </div>
      </footer>
    );
    }
}

export default Footer;
