import React, { Component } from 'react';
import './SignIn.css';



class SignIn extends Component {
    render() {
        return (
            <div className='SignIn'>
                <button className='ion'>LOG IN</button>
                {/* <p className='title'>LOG IN</p> */}
                <div>
                    {/* <img className='adjustIcon' src="https://img.icons8.com/color/30/000000/user-male.png" /> */}
                    <input type="email" ref="email2" placeholder="Email" />
                </div>
                <div>
                    {/* <img src="https://img.icons8.com/color/30/000000/lock.png" /> */}
                    <input type="password" ref="password2" placeholder="Password" />
                </div>
                <button class="google btn"><i class="fab fa-google fa-fw"></i> Login with Google+</button>
                <button class="fb btn"><i class="fab fa-facebook-f fa-fw"></i> Login with Facebook</button>
                <button id="submit">Submit</button>
            </div>
        )
    }
}

export default SignIn