import React,{Component} from 'react'
import BuildForm from '../../components/BuildForm/BuildForm'
import classes from './AddAddress.css'
import axios from 'axios'
class AddAddress extends Component {
    state = {
        firstName: '',
        lastName : '',
        address: '',
        zipCode: '',
        city:'',
        state:'',
       email: '',
       phoneNumber:'',
       emailValid:false,
       phoneValid: false
    }
    changeHandler = (event) => {
        const inputName = event.target.name;
        const newValue = event.target.value;
        this.setState({[inputName]:newValue},
            () => { this.validateField(inputName,newValue)});
        }

        validateField = (inputName,newValue) => {
            let re = '';

            switch(inputName){
                case 'email':
                re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
                let emailValid = re.test(newValue);
                this.setState({emailValid:emailValid});
                break;
                case 'phoneNumber':
                re = /^[0-9]{1,10}$/;
                let phoneValidAfterCheck = re.test(newValue);
                this.setState({phoneValid:phoneValidAfterCheck});
                break;
                default:
                break;
            }
        }
    sendToServerHandler = (event) => {
        event.preventDefault();
        
        // axios.get('http://www.yaddress.net/api/address',address).then(response => {
        //     console.log(response);
        // })
        const {emailValid,phoneValid,...address} = this.state;
         axios.post('http://localhost:4200/new-address',address)
         .then(response => {
             alert(response.data);
            this.refs.form.reset();
         })

    }
     render() {
        const {emailValid,phoneValid,...address} = this.state;
         return (
             <form ref="form" className={classes.Container} onSubmit={this.sendToServerHandler}>
                 <BuildForm 
                 changed={this.changeHandler}
                 values={address}></BuildForm>
                <button 
                className={classes.Button} 
                disabled={!(this.state.emailValid && this.state.phoneValid)}
                >Confirm</button>
             </form>
         )
     }
}
export default AddAddress;