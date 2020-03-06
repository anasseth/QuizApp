import './footer.css';
import React, { Component } from 'react';
// import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: false,
        }
    }
    render() {
        return (
            <div className='footer'>
                <i>Developed By ReactLover Inc. Copyright 2020</i>
            </div>
        );
    }
}

export default Header;