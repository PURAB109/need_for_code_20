// src/components/LoginForm.js
import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div>
            <div className="wrapper">
                <form>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="username" />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#"> Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div className="register-link">
                        <label for="register"><p>Don't have an account? <a href="app" id="register">Register</a></p></label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
