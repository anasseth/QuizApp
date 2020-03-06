import './Profile.css';
import './SideBar.css'
import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class ProfileHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: false,
        }
    }
    render() {
        return (
            <div class="header">
                <span>
                    {/* <SideBar /> */}
                    <Menu>
                        <button className='pic'><i class="fas fa-user fa-7x"></i></button>

                        <Link className="menu-item" to="/User/UserProfile">
                            <i class="far fa-user"></i>  Profile </Link>

                        <Link className="menu-item" to="/User/CreateQuiz">
                            <i class="fas fa-pencil-alt"></i> Create Quiz
                        </Link>

                        <Link className="menu-item" to="/User/TakeQuiz">
                            <i class="fas fa-sticky-note"></i> Take Quiz
                        </Link>

                        <Link className="menu-item" to="/User/Setting">
                            <i class="fas fa-cog"></i>  Settings
                        </Link>

                        <button className="signout" >
                            <i class="fas fa-sign-out-alt"></i> SignOut
                        </button>
                    </Menu>
                    <b className='username'>Hi ! Muhammad Anas</b>
                </span>
            </div>
        );
    }
}

export default ProfileHeader;