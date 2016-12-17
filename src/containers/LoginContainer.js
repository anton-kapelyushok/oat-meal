import React, { Component, PropTypes } from 'react';
import login from '../login.jpg';
import { browserHistory } from 'react-router';


export default class LoginContainer extends Component {
    handleClick() {
        browserHistory.push('tst');
    }

    componentDidMount() {
        document.body.addEventListener('click', () => browserHistory.push('profile'));
    }

   render() {
        return <div className="loginFiller"/>
    }
}

