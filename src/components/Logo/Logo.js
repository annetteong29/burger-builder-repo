import React from 'react';
import classes from './Logo.module.css';
// make webpack aware that this image is being used, it will handle itself
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        {/* cannot simply navigate to assets folder 
        because of build workflow - only within src folder */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;