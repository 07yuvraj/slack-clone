import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Login() {
    const [{user},dispatch]=useStateValue();
    const signIn=(e)=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error=>{
            alert(error.message);
        })
    }
    return (
        <div className="login">
            <div className="login_container">
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""></img>
                <h1>Sign in to Slack clone</h1>
                <p>Cloned by Yuvraj</p>
                <Button onClick={signIn}>Sign in Using Google</Button>
            </div>
        </div>
    )
}

export default Login
