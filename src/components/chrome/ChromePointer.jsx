'use strict';

var React = require('react');
var ReactCSS = require('reactcss');

class ChromePointer extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        picker: {
          width: '16px',
          height: '16px',
          borderRadius: '10px',
          transform: 'translate(-6px, -3px)',
          backgroundColor: 'rgb(248, 248, 248)',
          boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
        }
      }
    };
  }

  render() {
    return (
      <div is="picker"></div>
    );
  }

}

module.exports = ChromePointer;
