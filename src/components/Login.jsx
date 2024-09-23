import React , { useState , useContext } from 'react'
import UserContext from '../context/UserContext'


const Login = () => {

    const [user , setUser] = useState('')
    const [passward , setPassward] = useState('')

    const {setUsername} = useContext(UserContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser(user , passward)
    }

    return (

        <>
            <h2>Login</h2>
            <input 
                type="text"
                placeholder="Enter Name" 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
            />
            <input 
                type="passward"
                placeholder="Enter Passward" 
                value={passward} 
                onChange={(e) => setPassward(e.target.value)} 
            />
            <button onClick={HandleSubmit}>Login</button>
        </>

    )

}

export default Login;