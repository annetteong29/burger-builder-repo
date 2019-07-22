import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show} 
            clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
                // 1 is true, 0 is false
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;