import React from 'react';
import { Link } from 'react-router-dom';

//import nav bar components
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton'

//import css
import './header.css'

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <nav className="navigation">

                    <div>
                        <DrawerToggleButton />
                    </div>

                    <div className="logo">
                        <Link 
                            to="/">
                            Richard J Gates
                        </Link>
                    </div>

                    <div className="spacer">
                    </div>
                    <div className="navigation-items">
                        <ul>
                            <li>
                                <Link 
                                    to="/"
                                    className="menu">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="menu">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/aboutme"
                                    className="menu">
                                    About Me
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;