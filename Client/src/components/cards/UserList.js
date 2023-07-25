const UserList = ({users, _id, removeUsers, editUsers}) => {
    return (
        <>
            {users.map(user =>(
                <article key={user._id} style={styles.list}>
                    <p>First Name: {user.fName}</p>
                    <p>Last Name: {user.lName}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={() => removeUsers(_id)}>x</button>
                    <button onClick={() => editUsers(_id)}>Edit Users</button>
                </article>
            ))}
        </>
    )
}
export default UserList

const styles= {
    list: {
        padding: '0,5%',
        marginTop: '0.5%',
        backgroundColor: 'rgb( 163, 173, 194)',
        fontSize: '1.25em',
        fontWeight: 'bold',
        cursor: 'pointer',
        height: '300px',
        width:'500px'
    }
}