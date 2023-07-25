import React from 'react';
import MyInput from '../forms/MyInput';
import MyBtn from '../buttons/MyBtn';

const UserForm = ( props ) => {
    return (
        <form onSubmit={props.addUser} style={StyleSheet.UserForm}>
            <p>Add Users:</p>
            <label>First Name:</label>
            <myInput 
            id="fName"
            type="text"
            placeholder="First Name"
            value={props.fName}
            name="fName"
            onChange={props.fNameInput}
            />
            <label>Last Name:</label>
            <MyInput 
            id="lName"
            type="text"
            placeholder="Last Name"
            value={props.lName}
            name="lName"
            onChange={props.lNameInput}
            />
            <label>Email:</label>
            <MyInput 
            id="email"
            type="text"
            placeholder="email@email.com"
            value={props.email}
            name="email"
            onChange={props.emailInput}
            />
            <MyBtn myBtnTxt="Add Users"/>
        </form>
    );
}

export default UserForm