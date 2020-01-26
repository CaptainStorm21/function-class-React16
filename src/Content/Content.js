  import React, { Component } from 'react';
  import PropTypes from 'prop-types';

  class Content extends Component {
    static propTypes = {
      children: PropTypes.element.isRequired
    };

    render() {
      const { children } = this.props;

      return (
        <main>
          <h4> Components'Outputs </h4>
          {children}

        </main>
      );
    }
  }

  export default Content;