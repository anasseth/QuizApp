import React, { Component } from 'react';
import './UserProfile.css'

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initial: false,
        }
    }
    render() {
        return (
            <div className='userprofile'>
                <div className='hea'>Profile <i class="far fa-user"></i> </div>
                <button className='picu'><i class="far fa-user fa-7x"></i></button><hr />
                    <div className='ooo'>UserName: Stupion</div><br />
                    <div className='ooo'>DOB: 19/April/1999</div><br />
                   <div className='ooo'> E-m@il: stupion@gmail.com</div><br />
                   <div className='ooo'> Badges Earned<hr/> 
                  <div className='bag'> <img src="https://img.icons8.com/color/60/000000/police-badge.png"/> </div> 
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/voyager-badge.png"/> </div>
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/prize.png"/></div> 
                   <div className='bag'> <img src="https://img.icons8.com/color/60/000000/knight-shield.png"/> </div>
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/leaderboard.png"/> </div>
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/instagram-verification-badge.png"/></div> 
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/best-seller.png"/> </div>
                   <div className='bag'><img src="https://img.icons8.com/color/60/000000/falcon.png"/> </div>
                   </div><br />
                {/* <button className="signout" >
                    <i class="fas fa-sign-out-alt"></i> SignOut
                </button> */}
            </div>
        );
    }
}

export default UserProfile;