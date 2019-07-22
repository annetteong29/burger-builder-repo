import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button 
        // className needs to be a string, without join, is an array
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;