import React, { Component } from 'react'
import Social from '../components/Social'
// import profilepic from '../img/profilepic.jpg'
import ReactTypingEffect from 'react-typing-effect'


class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://www.facebook.com/photo.php?fbid=2966424500126847" alt="profile" className="profilepic"/>
                <ReactTypingEffect text= {['I am Walee' , 'Kaa__mon']} speed={80} eraseDelay={200} className="typingeffect"/>
                <Social />
            </div>
        )
    }
}

export default Home