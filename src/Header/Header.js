import './Header.css';
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class Header extends Component {
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
                    <div id="acebook">
                        <h1>Quiz App Pro</h1>
                    </div>
                    <span id="hoshiyaar">
                        <Link id="guest" to='/'>SignIn</Link>
                        <Link id="signout" to='/SignUp'>SignUp</Link>
                    </span>
                </span>
            </div>
        );
    }
}

export default Header;
