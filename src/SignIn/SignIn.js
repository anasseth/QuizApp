import React, { Component } from 'react';
import './SignIn.css';



class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:'m.anasseth00@gmail.com',
            password:'guest',
            switchto:'',
        }
        this.checkEmail=this.checkEmail.bind(this)
        this.checkPassword=this.checkPassword.bind(this)
        this.submit=this.submit.bind(this)
    }

    checkEmail(e) {
        let email = e.target.value
        if (this.state.email == email) {
        }
        else {
            alert('wrong email')
        }
    }
    checkPassword(e) {
        let password = e.target.value
        if (this.state.password == password) {
        }
        else {
            alert('wrong password')
        }
    }
    submit(){
        this.setState({
            switchto:'/User/UserProfile'
        })
    }

    render() {
        return (
            <div className='SignIn'>
                <button className='ion'>LOG IN</button>
                {/* <p className='title'>LOG IN</p> */}
                <div>
                    {/* <img className='adjustIcon' src="https://img.icons8.com/color/30/000000/user-male.png" /> */}
                    <input type="email" ref="email2" placeholder="Email" onBlur={this.checkEmail}/>
                </div>
                <div>
                    {/* <img src="https://img.icons8.com/color/30/000000/lock.png" /> */}
                    <input type="password" ref="password2" placeholder="Password" onBlur={this.checkPassword} />
                </div>
                <button class="google btn"><i class="fab fa-google fa-fw"></i> Login with Google+</button>
                <button class="fb btn"><i class="fab fa-facebook-f fa-fw"></i> Login with Facebook</button>
                <button id="submit" onClick={this.submit}><a href={this.state.switchto}>Submit</a></button>
            </div>
        )
    }
}

export default SignIn