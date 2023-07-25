import { useEffect, useState } from "react";
import { saveUser, getUser }  from '../services/userService';
import Title from '../componts/Title';
import UserList from "../components/cards/UserList";
import UserForm from "../components/forms/UserForm";

function Users() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [resp, setResp] = useState('');
    const [users, setUsers] = useState('');
    const [user, setUser] = useState('');

useEffect( () => {
    getUser()
    .then(result => {
        setUsers(result.data.result)
    })
    .catch( err => {
        console.log(err.message);
    });
},  [setUser, user]);

const getInput = e => {
//empty
};

const fNameInput = e => {
    console.log(e.target.value);
    setfName(e.target.value);
}
const lNameInput = e => {
    console.log(e.target.value);
    setlName(e.target.value);
}
const emailInput = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
}

const addUser = e => {
    e.preventDefault();
    saveUser( fName, lName, email )
    .then(result => {
        setfName(' ');
        setlName(' ');
        setEmail(' ');
        setResp(result.data.message);
        setUser(result.data.result);
    })
    .catch(err => {
        console.log('Error: ', err.message);
        setResp('Error: ', err.message);
    });
    console.log(addUser);
};
return (
    <section>
        <h1>Users</h1>
        <Title resp={resp}/>
        <UserForm
            getInput={getInput}
            addUser={addUser}
            fNameInput={fNameInput}
            lNameInput={lNameInput}
            emailInput={emailInput}
        />

        <UserList 
            users={users}
        />
    </section>
);

}
export default Users;





