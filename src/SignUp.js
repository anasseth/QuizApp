import React, { Component } from 'react';
import '../SignIn/SignIn.css'

class SignUp extends Component{
  render(){
      return(
        <div className='SignIn'>
        <button className='ion'>SIGN UP</button>
        <div>
            <input type="text" ref="name" placeholder="Username"/>
        </div>
        <div>
            <input type="email" ref="email2" placeholder="Email" />
        </div>
        <div>
            <input type="password" ref="password2" placeholder="Password" />
        </div>
        <div>
            <input type="text" ref="dobirth" placeholder="DOB"/>
        </div>
        <button id="submit">Submit</button>
    </div>
      )
  }
}

export default SignUp ;