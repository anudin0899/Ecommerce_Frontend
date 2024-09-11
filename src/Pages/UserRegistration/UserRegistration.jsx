import React, { useState } from 'react'
import "./index.css"
import SignUp from '../../Components/SignUp/SignUp';
import Login from '../../Components/SignIn/Login';

const UserRegistration = () => {

    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup(!isSignup);
    };

    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="overlay-container">
                    <div className="overlay">
                        {isSignup ?
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with your personal info
                                </p>
                                <button className="ghost" onClick={toggleForm}>
                                    Sign In
                                </button>
                            </div>
                            :
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your details and start the journey with us</p>
                                <button className="ghost" onClick={toggleForm}>
                                    Sign Up
                                </button>
                            </div>
                        }
                    </div>
                </div>
                {isSignup ?
                    <div className="form-container sign-up-container">
                        <SignUp />
                    </div> :
                    <div className="form-container sign-in-container">
                        <Login />
                    </div>
                }
            </div>
        </div>
    )
}

export default UserRegistration