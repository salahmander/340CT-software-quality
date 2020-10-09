import React, { Component } from 'react';
import './header.css';
import Acer from '../images/Acer.png'


class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleDesktop = this.handleDesktop.bind(this);
        this.handleLaptop = this.handleLaptop.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }


    handleLogin = event => {
        event.preventDefault();
        this.props.onClick();
    }

    handleDesktop = event => {
        event.preventDefault();
        this.props.onDesktopClick();
    }

    handleLaptop = event => {
        event.preventDefault();
        this.props.onLaptopClick()
    }

    handleHome = event => {
        event.preventDefault();
        this.props.onHomeClick()
    }
    handleLogout = event => {
        event.preventDefault();
        this.props.onLogoutClick()
    }




    render() {
        let login;
        let logout
        if (this.props.signedIn) {
            logout = <button className="loginButton" type="Login"> Logout </button>
        } else {
            login = <button className="loginButton" type="Logout"> Login </button>
        }

        return (
            <div className="header">
                <div className="logo">
                    <button className="homeButton" onClick={this.handleHome}><img src={Acer} alt="Acer"></img></button>
                </div>
                <div className="header-center">
                    <button className="laptopButton" onClick={this.handleLaptop}> Laptop </button>
                    <button className="desktopButton" onClick={this.handleDesktop}> Desktop </button>
                    <span onClick={this.handleLogin}>
                        {login}
                    </span>
                    <span onClick={this.handleLogout}>
                        {logout}
                    </span>

                </div>
            </div>
        );
    }
}
export default Header;