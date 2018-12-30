import React, {Component} from 'react'
import axios from 'axios'
import classes from './ShowAddress.css'
import Spinner from '../../components/Spinner/Spinner'
import Aux from '../../hoc/Aux'
import Address from '../../components/Address/Address'
class ShowAddress extends Component {
    state = {
        addresses: [],
        loaded:false
    }

    componentDidMount(){
        axios.get('http://localhost:4200/addresses').then(response => {
            this.setState({addresses:response.data,loaded:true});
        });
    }
    
    
    
    
    render() {
        let addressesToShow;
        if(!this.state.loaded){
            addressesToShow = <Spinner></Spinner>
        }
        addressesToShow = this.state.addresses.map(address => {
            return (
                    <Address 
                    name={address.Name} 
                    addressLine1={address.AddressLine1} 
                    addressLine2={address.AddressLine2}
                    email={address.email}
                    phoneNumber={address.phoneNumber}></Address>
            )
        })
        return (
            <Aux>
                <h1 className={classes.Title}>Addresses in the system:</h1>
                <section className={classes.Addresses}></section>{addressesToShow}
            </Aux>
        )
    }

}

export default ShowAddress