import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import DevTools from './lib/devtools'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class App extends Component {

  render() {
    const { children } = this.props;
    return (

      <div>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        <DevTools />
      </div>
    );
  }
}

