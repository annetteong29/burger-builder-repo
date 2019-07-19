import React from 'react';
import Aux from '../../hoc/Aux';
import App from '../../App';

const layout = ( props ) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
        {/* output the component this layout wraps */}
        {props.children}
    </main>
    </Aux>
);

export default layout;