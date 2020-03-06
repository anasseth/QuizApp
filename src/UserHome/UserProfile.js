import React, { Component } from 'react';
import './test.css'

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: false,
        }
    }
    render() {
        return (
            <div className='profile'>
                <button className='pic'><i class="far fa-user fa-7x"></i></button>

                <p>
                    <i class="far fa-user"></i>  Profile
                </p>

                <p>
                    <i class="fas fa-pencil-alt"></i> Create Quiz
                </p>

                <p>
                    <i class="fas fa-sticky-note"></i> Take Quiz
                </p>

                <p>
                    <i class="fas fa-cog"></i>  Settings
                </p>

                <button className="signout" >
                    <i class="fas fa-sign-out-alt"></i> SignOut
                </button>
            </div>
        );
    }
}

export default UserProfile;