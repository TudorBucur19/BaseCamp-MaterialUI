import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import firebase from '../utils/firebase';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = (props) => {
  const [user, setUser] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const history = useHistory();

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = (data) => {
    clearErrors();
    console.log(data)
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then( user => user.user.uid && history.push('/campgrounds'))
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default: console.log(err);
          }
      })      
  };

  const handleSignup = (data, userPhoto = null) => {
    clearErrors();
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(function(result) {
        console.log(data.userName)
        return result.user.updateProfile({
          displayName: data.userName,
          photoURL: userPhoto,
        })
      })
      .catch((err) => {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default: console.log(err);
          }
      })
      .then(history.push('/campgrounds'));
  };

  const handleLogout = () =>  {
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    })
    
  };

  useEffect(() => {
    authListener();
  }, []);

  const values = {
    user,
    handleLogin,
    handleSignup,
    handleLogout,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  }

    return (
        <AuthenticationContext.Provider value={ values }>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationContextProvider;