import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import routes
import AboutMe from '../../Routes/AboutMe/AboutMe';
import Projects from '../../Routes/Projects/Projects';
import ContactMe from '../../Routes/ContactMe/ContactMe';
import NotFound from '../../Routes/NotFound/NotFound';

//import additional components
import Header from '../Header/Header';
import SideDrawer from '../SideDrawer/SideDrawer';
import BackDrop from '../BackDrop/BackDrop';

//import context for menu
import MenuContext from '../../contexts/MenuContext';


class App extends React.Component {

    static contextType = MenuContext;

    state = {
        sideDrawerIsOpen: false,
        drawerClass: 'side-drawer'
    }

    handleOpenSideDrawer = () => {

        this.setState({
            sideDrawerIsOpen: true,
            drawerClass: 'side-drawer is-open'
        })
    }

    handleCloseSideDrawer = () => {

        this.setState({
            sideDrawerIsOpen: false,
            drawerClass: 'side-drawer'
        })
    }

    render() {

        let backDrop;
        if(this.state.sideDrawerIsOpen) {
            backDrop = <BackDrop click = { this.handleCloseSideDrawer } />
        }
        return (
            <div className='App'>

                <MenuContext.Provider
                    value = {{ 
                        sideDrawerIsOpen: this.state.sideDrawerIsOpen,
                        drawerClass: this.state.drawerClass,
                        open: this.handleOpenSideDrawer,
                        close: this.handleCloseSideDrawer
                }}>

                    <Header />
                    <SideDrawer />
                    { backDrop }

                </MenuContext.Provider>
                
                <main style={ { marginTop: '100px' } } className='App__main'>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            component={ Projects }
                          />
                        <Route 
                            exact
                            path={'/contact'}
                            component={ ContactMe }
                        />
                        <Route 
                            exact
                            path={'/aboutme'}
                            component={ AboutMe }
                          />
                        <Route 
                            component={ NotFound }
                        />
                    </Switch>
                </main>
                
            </div>
        )
    }
}


export default App
