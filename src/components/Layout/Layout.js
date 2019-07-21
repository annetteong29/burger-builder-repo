import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {/* output the component this layout wraps */}
        {props.children}
    </main>
    </Aux>
);

export default layout;