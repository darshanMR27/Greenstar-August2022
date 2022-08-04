import React, {Component} from 'react';
import contacts from './images/contacts.jpg';
class Contact extends Component{

componentDidMount(){
    document.getElementById(localStorage.carousel).style.display="none";
}

 render(){
return (
<div style={{ background: `url('${contacts}') no-repeat center center`}}>
    <h1>
    Contacts
    </h1>
    <p><h3>Santhosh</h3>+91 9880096571</p>
    {/* <p><h3>Manish</h3>+91 </p>
    <p><h3>Tejas</h3>+91 </p>
    <p><h3>Dhananjay</h3>+91 </p> */}
</div>
)
 }
}

export default Contact;