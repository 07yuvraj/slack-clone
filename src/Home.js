import React from 'react';
import "./Home.css";
import {Button} from '@material-ui/core';
import {useStateValue} from './StateProvider';

function Home() {
    const [{user}]=useStateValue();
    return (
        <div className="home">
            <div className="home_container">
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""></img>
                <h1>Welcome to Slack Clone</h1>
                <p>Cloned by Yuvraj</p>
                <Button>Welcome {user.displayName}</Button>
                <h5>Go to channels for Real-time Conversation</h5>
            </div>
        </div>
    )
}

export default Home;
