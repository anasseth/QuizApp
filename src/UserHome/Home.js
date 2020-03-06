import React, { Component } from 'react';
import ProfileHeader from './Profile.js';
import Footer from '../Footer/Footer.js';
import { Route, Link, BrowserRouter as Router , Switch} from 'react-router-dom';
import UserProfile from './UserProfile.js'
import CreateQuiz from './CreateQuiz.js'
import TakeQuiz from './TakeQuiz.js';
import Setting from './Setting.js';
import './Home.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: false,
    }
  }

  render() {
    return (
      <div className='b'>
     
     <Router>
     <ProfileHeader />
        <div className='alignbox'>
          <center>
          <Switch>
            <div>
            <Route exact path="/User/UserProfile" component={UserProfile}/>
            <Route path="/User/CreateQuiz" component={CreateQuiz} />
            <Route path="/User/TakeQuiz" component={TakeQuiz} />
            <Route path='/User/Setting' component={Setting} /> 
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

export default Home;
