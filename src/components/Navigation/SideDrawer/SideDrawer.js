import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    // conditionally attach CSS classes to allow animations 
    // when drawer is closed or opened
    // so {} instead of ()
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                {/* height="11%" */}
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;