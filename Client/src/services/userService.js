import axios from 'axios';


// GET USER
export const getUser = async() => {
    console.log('Real Get');
    return await axios.get('http:localhost:3000/users');
};

// POST USER
export const saveUser = async (fName, lName, email) => {
    console.log('Real Post - Save');
    return await axios.post('http:localhost:3000/users', {
        fName: fName,
        lName: lName,
        email: email
    });
};