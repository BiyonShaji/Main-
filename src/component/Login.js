import React, { useState } from "react";
import './Login.css';
// import {Link} from "react-router-dom";


export const Login = (props) => {
    // const [username, setUsername] = useState('');
     const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                
             
              <label htmlFor="email">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              {/* <input type="text" value={username} onChange={e => setUsername(e.target.value)} */}

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button> BACK</button>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
    )
}