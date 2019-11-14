import React from 'react';
import MenuContext from '../../contexts/MenuContext';

class DrawerToggleButton extends React.Component {

    static contextType = MenuContext;

    handleClick = e => {
        e.preventDefault()
        this.context.sideDrawerIsOpen
        ? this.context.close()
        : this.context.open()
    }

    render() {
        return(
            <section 
                className="toggle-button"
                onClick = { this.handleClick }>
                <i className="fas fa-bars"></i>
            </section>
        )
    }
}

export default DrawerToggleButton