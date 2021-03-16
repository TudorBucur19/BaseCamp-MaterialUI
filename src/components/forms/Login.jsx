import React, { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import Navbar from '../navbar/Navbar';
import './Login.scss';

const Login = () => {
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
        userName,
        setUserName 
    } = useContext(AuthenticationContext);
    
    return ( 
        <div>
        <Navbar/>
        <section className="login">
            <div className="login-container">
            <label>User Name</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}                
                />

                <label>Email</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                
                />
                <p className={ emailError ? "error-msg" : "hidden"}>{emailError}</p>
                <label>Password</label>
                <input 
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}                
                />
                <p className={ passwordError ? "error-msg" : "hidden"}>{passwordError}</p>

                <div className="btn-container">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>   
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>

            </div>
        </section>
        </div>
     );
}
 
export default Login;