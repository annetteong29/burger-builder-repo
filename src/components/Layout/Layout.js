import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <div>SideDrawer</div>
        <main className={classes.Content}>
            {/* output the component this layout wraps */}
            {props.children}
        </main>
    </Aux>
);

export default layout;