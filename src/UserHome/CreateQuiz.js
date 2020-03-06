import React, { Component } from 'react';
import './test.css'
import '../SignIn/SignIn.css'

class CreateQuiz extends Component {
  constructor(props) {
      super(props)
      this.state = {
          initial: false,
      }
  }
  render() {
      return (
        <div className='SignIn createquiz'>
        <button className='ion'>Create Quiz <i class="fas fa-pencil-alt"></i></button>
        <div>
            <b>Enter Question</b>
            <input type="text" ref="question" className='cquiz'/>
        </div>
        <div>
        <b>Enter Answer</b>
            <input type="text" ref="ans"  className='cquiz'/>
        </div>
        <div>
        <b>Enter Option 1</b>
            <input type="text" ref="opt1"  className='cquiz' />
        </div>
        <div>
        <b>Enter Option 2</b>
            <input type="text" ref="opt2"  className='cquiz'/>
        </div>
        <div>
        <b>Enter Option 2</b>
            <input type="text" ref="opt3" className='cquiz'/>
        </div>
        <button id="submit">Submit</button>
    </div>
      );
  }
}

export default CreateQuiz;