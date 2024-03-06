import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'


const Login = () => {
     let navigate = useNavigate();
     const [name, setName] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState('');
     const [isButtonDisabled, setIsButtonDisabled] = useState(true);

     const handleNameChange = (e) => {
        setName(e.target.value);
        setIsButtonDisabled(e.target.value === '' || password === '');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsButtonDisabled(name === '' || e.target.value === '');
    };

     const handleLogin = async () => {
        try {
            // Fetch user data from the JSON server
            const response = await axios.get('http://localhost:3000/users');
            const userData = response.data;
            
            // Check if entered email and password match any user's credentials
            const user = userData.find(user => user.name === name && user.password === password);
            
            if (user) {
                // User authenticated, navigate to the desired page
                navigate("/counter", { state: { name } });
            } else {
                // Authentication failed, display error message
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error, e.g., display an error message to the user
        }
    };




    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                <div className='input'>
                    <img src={user_icon} alt=""></img>
                    <input type="text" 
                    placeholder='Username'  
                    name="text"
                    onChange={handleNameChange}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""></img>
                    <input type="password" 
                        placeholder='Password' 
                        name="password"
                       onChange={handlePasswordChange}
                      />
                </div>
            </div> 
            <div className='submit-container'>
                <button className='submit'  
                onClick={handleLogin}
                disabled={isButtonDisabled}
                >
                    Log in
                </button>
                <button className='submit'  
                onClick={() => {                 
                     navigate("/signup")                    
                  }}
                >
                    Sign Up
                </button>
            </div>
        </div>
        
    )
}

export default Login