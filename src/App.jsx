import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import DevTools from './lib/devtools'

export default class App extends Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <DevTools />
      </div>
    );
  }
}

