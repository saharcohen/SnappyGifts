import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom'
import classes from './AddressApp.css'
import AddAddress from '../AddAddress/AddAddress'
import ShowAddress from '../ShowAddress/ShowAddress'

class AddressApp extends Component {
render() {
    return (
        <div className={classes.NavBar}>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/' exact>
                        Add New Address</NavLink></li>
                        <li><NavLink to='/show-address' exact>
                        Show All Addresses</NavLink></li>
                    </ul>
                </nav>
            </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1>}></Route>
            <Route path="/new-post" exact render={() => <h1>Home 2</h1>}></Route> */}
            <Route path="/" exact component={AddAddress} ></Route>
            <Route path="/show-address" exact component={ShowAddress} ></Route>

        </div>
    );
    }
}
export default AddressApp;
