import React, { Component } from 'react';
import './test.css'

class Setting extends Component {
  constructor(props) {
      super(props)
      this.state = {
          initial: false,
      }
  }
  render() {
      return (
          <div>
              <i className='tot'>You are viewing Setting.js</i>
          </div>
      );
  }
}

export default Setting;