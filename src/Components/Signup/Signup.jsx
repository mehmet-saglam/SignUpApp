import React from 'react'
import "./signup.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios' // Import Axios for HTTP requests

import user_email from '../Assets/email.png'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const Signup = () => {
    let navigate = useNavigate();
    const [email, setEmail]= useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        try {
            // Make a POST request to save user information to the JSON server
            await axios.post('http://localhost:3000/users', {
                email,
                name,
                password
            });
            // Redirect to login page after successful signup
            navigate("");
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error, e.g., display an error message to the user
        }
    };

   return (
       <div className='container'>
           <div className='header'>
               <div className='text'>Sign up</div>
               <div className='underline'></div>
           </div>
           <div className="inputs">
           <div className='input'>
                   <img src={user_email} alt=""></img>
                   <input type="text" 
                   placeholder='E-mail'  
                   name="text"
                   onChange={(e) => setEmail(e.target.value)} />
               </div>
               <div className='input'>
                   <img src={user_icon} alt=""></img>
                   <input type="text" 
                   placeholder='Username'  
                   name="text"
                   onChange={(e) => setName(e.target.value)} />
               </div>
               <div className='input'>
                   <img src={password_icon} alt=""></img>
                   <input type="password" 
                       placeholder='Password' 
                       name="password"
                       onChange={(e) => setPassword(e.target.value)}
                     />
               </div>
           </div> 
           <div className='submit-container'>
               <button className='submit'  
               onClick={() => {                 
                    {  navigate("/") }                     
                 }}
               >
                   Log in
               </button>
               <button className='submit'  
                onClick={handleSignup} 
                >
                    Submit
                </button>
           </div>
       </div>
       
   )
}

export default Signup
