import React from 'react';
// import toggleIcon from '../../../../assets/images/toggle.png';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    // <img src={toggleIcon} 
    <div onClick={props.clicked} 
        className={classes.DrawerToggle}
        alt="ToggleIcon" >
            <div></div>
            <div></div>
            <div></div>
    </div>
);

export default drawerToggle;