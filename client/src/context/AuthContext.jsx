import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth, googleProvider, facebookProvider } from '../config/firebase';
import config from '../config/config';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (config.NODE_ENV !== 'test') {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  const signInWithGoogle = (callback = () => { }) => {
    auth.signInWithPopup(googleProvider).then((res) => {
      console.log(res.user);
      callback();
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const signInWithFacebook = (callback = () => { }) => {
    auth.signInWithPopup(facebookProvider).then((res) => {
      console.log(res.user);
      callback();
    }).catch((error) => {
      console.log(error.message);
    });
  };

  const loginUser = async (email, password, callback = () => { }) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      callback();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signupUser = async (name, email, password, callback = () => { }) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = res;
      callback();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert('Password reset link sent!');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logoutUser = (callback = () => { }) => {
    auth.signOut();
    if (typeof callback === 'function') {
      callback();
    }
  };

  const value = {
    loading,
    sendPasswordResetEmail,
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
