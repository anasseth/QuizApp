import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import SignIn from '../SignIn/SignIn.js';
import SignUp from '../SignUp/SignUp.js';
import Footer from '../Footer/Footer.js';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: false,
    }
  }

  render() {
    return (
      <div>
        <Router>
        <div>
          <Header />
          <center>
          <Switch>
            <div className='login'>
            <Route exact path="/" component={SignIn} className='SignIn' />
            <Route path="/SignUp" component={SignUp} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* <Route component={Notfound} /> */}
            </div>
          </Switch>
          </center>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
