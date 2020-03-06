import React, { Component } from 'react';
import './test.css'

class TakeQuiz extends Component {
  constructor(props) {
      super(props)
      this.state = {
          initial: false,
      }
  }
  render() {
      return (
          <div>
              <i className='tot'>You are viewing TakeQuiz.js</i>
          </div>
      );
  }
}

export default TakeQuiz;