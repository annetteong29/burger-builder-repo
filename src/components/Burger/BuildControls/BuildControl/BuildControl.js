import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        {/* type of ingredient */}
        <div className={classes.Label}>{props.label}</div>

        {/* minus button */}
        <button 
            className={classes.Less}
            onClick={props.removed}
            disabled={props.disabled}>
        Less</button>

        {/* plus button */}
        <button 
            className={classes.More}
            onClick={props.added}>
        More</button>
    </div>
);

export default buildControl;