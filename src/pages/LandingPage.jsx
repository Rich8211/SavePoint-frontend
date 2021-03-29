import React,{ useContext } from 'react';
import LandingPageButton from '../components/LandingPageButton/LandingPageButton';
import FeaturedCard from '../components/featured-event-card/featured-event-card';
import { featured_data } from "../assets/featuredData";
import UserDataContext from '../context/UserDataContext';

import city from '../assets/city.png'
import orange from '../assets/OrangeBg.png'

import './LandingPage.scss';

const LandingPage = () => {
    const { dispatch } = useContext(UserDataContext)

    return (
        <div className="landing-page">
            <div className="header">
                <div className="header-box">
                    <h1 className="heading">
                        It's expensive to go alone.  Split the cost!
                    </h1>
                    <p>
                        For your next convention journey, 
                        find a room, your very own Savepoint, 
                        and share it with three other cool attendees like you!
                    </p>
                    <LandingPageButton 
                        text='REQUEST ROOM'
                        backgroundColor='rgba(102, 212, 127, 0.8)' 
                        borderColor='rgba(102, 212, 127, 0.5)'/>
                </div>
            </div>
            <div className="featured">
                <h2>
                    Featured Events
                </h2>
                <img src={city} className="city-img"/>
                <img src={orange} className="orange-gradient"/>
                <div className="event-cards">
                    {featured_data.map((con) => (
                        <FeaturedCard
                        title={con.title}
                        date={con.date}
                        location={con.location}
                        body={con.description}
                        />
                    ))}
                </div>
                <div className="suggest-event">
                    
                </div>
            </div>
            <div className="how-it-works">
                <h3>How It Works</h3>
                <div className="steps">
                <div className="one">
                    <h4>SIGN UP</h4>
                    <p>Create a Savepoint account with Facebook.</p>
                </div>
                <div className="two">
                    <h4>FIND AN EVENT </h4>
                    <p>
                    View out event list. Choose an old favorite or a new adventure.
                    </p>
                </div>
                <div className="three">
                    <h4>CREATE/JOIN A PARTY</h4>
                    <p>Lead/join a small group of people to split costs & have fun!</p>
                </div>
                </div>
            </div>
            <div className="get-started">
                <div className="get-started-container">
                    <p>
                        Use Savepoint tools to manage/join a small group of other 
                        event attendees to enjoy your next convention adventure!
                    </p>
                    <LandingPageButton 
                        borderColor= 'rgba(102, 212, 127, 0.5)'
                        backgroundColor= 'rgba(102, 212, 127, 0.8)'
                        text='GET STARTED' 
                        onClick = {() => dispatch({type: "SET_MODAL", payload: "SignUp"})}
                        />
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage
