import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth, googleProvider, facebookProvider } from '../config/firebase';
import config from '../config/config';
import useMainContext from './MainContext.jsx';
import { user as userAPI } from '../api';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accountDetails, setAccountDetails] = useState({
    referral_code: 9999,
    credit_available: 20,
    subscription_status: true,
    transactions: [],
  });

  const { userType, setUserType } = useMainContext();

  useEffect(() => {
    if (config.NODE_ENV !== 'test') {
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);

        if (user) {
          if (!userType) {
            userAPI.fetchUserAccountType(user.uid, (userTypeString) => {
              console.log(`API found ${userTypeString} for userType`);

              setUserType(userTypeString);
              setCurrentUser(user);
              setAccountDetails((prev) => ({
                ...prev,
                customer_type: userTypeString,
              }));
            });
          }
          userAPI.fetchAccountDetails(user.uid, (newDetails) => {
            setAccountDetails((prev) => {
              const newObj = {
                customer_type: 'customer',
                user_id: user.uid,
                id: user.uid,
                email: user.email,
                'first name': user.displayName || 'John',
                'last name': user.displayName || 'Doe',
                Address: 'Sample Address',
                City: 'Seattle',
                State: 'WA',
                'Zip Code': '98109',
                'referral code': '12098214',
                referral_code_used: false,
                first_purchase_complete: false,
                credit_available: '$50',
                ...newDetails,
              };

              userAPI.updateAccountDetails(user.uid, newObj);
              return newObj;
            });
          });
          userAPI.fetchAccountTransactions(user.uid, (newTransactions) => {
            setAccountDetails((prev) => ({
              ...prev,
              transactions: newTransactions || [],
            }));
          });
        } else {
          setCurrentUser(null);
        }
      });
    }
  }, []);

  const setSubscriptionState = (newStatus) => {
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      subscription_status: newStatus,
    }));
  };

  const signInWithGoogle = (callback = () => {}) => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
        callback();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signInWithFacebook = (callback = () => {}) => {
    auth
      .signInWithPopup(facebookProvider)
      .then((res) => {
        console.log(res.user);
        callback();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const loginUser = async (email, password, callback = () => {}) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      callback();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signupUser = async (name, email, password, callback = () => {}) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const { user } = res;
      callback(user);
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

  const logoutUser = (callback = () => {}) => {
    auth.signOut();
    setUserType('');
    if (typeof callback === 'function') {
      callback();
    }
  };

  const value = {
    loading,
    sendPasswordResetEmail,
    currentUser,
    accountDetails,
    loginUser,
    logoutUser,
    signupUser,
    signInWithGoogle,
    setSubscriptionState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
