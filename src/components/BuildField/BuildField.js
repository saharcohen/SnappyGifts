import React from 'react'
import classes from './BuildField.css'
const buildField = (props) => {
    return (
    <li className={classes.FormRow}>
        <label className={classes.Label}>{props.label}</label>
        <input className={classes.Input} name={props.name} onChange={props.changed}></input>
    </li>
    )
}

export default buildField;