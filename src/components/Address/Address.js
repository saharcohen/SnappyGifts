import React from 'react';
import classes from './Address.css'
const address = (props) => (
    <article className={classes.Address} onClick={props.clicked}>
        <h1>{props.name}</h1>
        <div>
            <div>{props.addressLine1}</div>
            <div>{props.addressLine2}</div>
        </div>
        <div className={classes.Contant}>
        <section><strong>E-mail:</strong> {props.email}</section>
        <section><strong>Phone:</strong> {props.phoneNumber}</section>
        </div>
    </article>
);

export default address;