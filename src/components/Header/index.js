import React, { Component, PropTypes } from 'react';
import logo from '../../logo.svg';
import user from '../../user.png';
import './index.css';

export default class Header extends Component {
    render () {
        const targets = ['profile', 'diet plan'];
        return (
        <nav className="header">
            <div className="header-logo-container"><img className="header-logo" src={logo} /></div>
            <ul className="header-nav">
                {targets.map((target, index) => {
                    return (<li className={index === this.props.selectedTabNumber && "selected"}>
                    <a>{target}</a>
                    </li>);
                })}
            </ul>
            <div className="header-avatar-container"> <img className="header-avatar" src={user} />   </div>
        </nav>
    );
    }

}

Header.propTypes = {
    selectedTabNumber: PropTypes.number,
};

Header.defaultProps = {
    selectedTabNumber: 0,
};
