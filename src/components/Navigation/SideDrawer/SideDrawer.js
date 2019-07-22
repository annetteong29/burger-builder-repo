import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    // conditionally attach CSS classes to allow animations 
    // when drawer is closed or opened
    // so {} instead of ()
    return (
        <div className={classes.SideDrawer}>
           <div className={classes.Logo}>
               {/* height="11%" */}
               <Logo />
           </div>
           <nav>
               <NavigationItems />
           </nav>
        </div>
    );
};

export default sideDrawer;