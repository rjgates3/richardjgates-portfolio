import React from 'react';
import { Link } from 'react-router-dom';

//import context for menu
import MenuContext from '../../contexts/MenuContext';

//import css
import './sideDrawer.css'

class SideDrawer extends React.Component {

    static contextType = MenuContext;

    handleLinkClicked = () => {
        this.context.close();
    }

    render() {
        return(
            <nav className={ this.context.drawerClass }>
                <div className="sidebar-navigation-items">    
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/aboutme"
                                className="menu"
                                onClick = { this.handleLinkClicked }>
                                About Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideDrawer