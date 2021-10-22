import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  Box,
} from '@material-ui/core';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMainContext from '../../../context/MainContext.jsx';
import useAuth from '../../../context/AuthContext.jsx';
import { HOME } from '../../../config/pageRoutes';
import useStyles from '../../styles';
import AccountForm from './AccountForm.jsx';
import { user as userAPI } from '../../../api';

const LoginFormFields = [
  {
    name: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    placeholder: 'Password',
  },
];

const SignupFormFields = [
  {
    name: 'name',
    placeholder: 'Name',
  },
  {
    name: 'email',
    placeholder: 'Email',
  },
  {
    name: 'password',
    placeholder: 'Password',
  },
];

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => {
  const classes = useStyles();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formEntries, setFormEntries] = useState({});
  // const [customerType, setCustomerType] = useState('');
  const [typeSelection, setTypeSelection] = useState('');
  const history = useHistory();

  const {
    loginUser,
    signupUser,
    sendPasswordResetEmail,
    signInWithGoogle,
    signInWithFacebook,
    currentUser,
  } = useAuth();

  useEffect(() => {
    setTypeSelection('');
  }, []);

  const { userType, setUserType } = useMainContext();

  const handleTypeChoose = () => {
    setUserType(typeSelection);
  };

  const handleTypeChange = (e) => {
    setTypeSelection(e.target.value);
  };

  const toggleLoginSignup = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormEntries((prevEntries) => ({
      ...prevEntries,
      [name]: value,
    }));
  };

  const handleEmailPassSubmit = () => {
    const { email, password, name } = formEntries;

    if (isLoginForm) {
      loginUser(email, password, () => {
        history.push(HOME);
      });
    } else {
      signupUser(name, email, password, (user) => {
        history.push(HOME);
        userAPI.uploadUserAccountType(
          user.uid,
          typeSelection,
          (userTypeRes) => {
            if (userTypeRes) {
              setUserType(userTypeRes);
            }
          },
        );
      });
    }
  };

  const handleAccountSubmit = (accountFunction) => {
    accountFunction((successfulSignin) => {
      history.push(HOME);
    });
  };

  const handleForgotPassword = () => {
    const { email } = formEntries;
    sendPasswordResetEmail(email || window.prompt('Enter your email:'));
  };

  const formProps = {
    handleChange,
    formEntries,
    handleTypeChange,
    customerType: userType,
    handleAccountSubmit,
    signInWithGoogle,
    signInWithFacebook,
    toggleLoginSignup,
    handleEmailPassSubmit,
  };

  return (
    <Container
      sx={{
        button: {
          backgroundColor: '#264653',
          '&:hover': {
            backgroundColor: '#f4a261',
          },
          color: '#fff',
          border: 'none',
          padding: '10px',
        },
      }}
    >
      <Paper container elevation={4} style={{ backgroundColor: '#eee' }}>
        {!userType ? (
          <Grid container alignItems="center" justifyContent="center">
            <Grid style={{ margin: '2em' }}>
              <label>
                <Grid container direction={'column'} spacing={2}>
                  <Grid spacing={3} container>
                    <Typography
                      variant="h5"
                      style={{
                        padding: '1em',
                        textAlign: 'center',
                        color: 'gray',
                      }}
                    >
                      To log in or sign up, <br />
                      please select account type below:{' '}
                    </Typography>
                  </Grid>

                  <Select
                    sx={{ mt: 2, backgroundColor: '#fff', color: '#000' }}
                    labelId="demo-simple-select-label"
                    label="Customer Type"
                    value={typeSelection}
                    onChange={handleTypeChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'customer'}>Customer</MenuItem>
                    <MenuItem value={'farmer'}>Farmer</MenuItem>
                    <MenuItem value={'nutritionist'}>Nutritionist</MenuItem>
                  </Select>
                </Grid>
              </label>
              <Button
                sx={{ mt: 3, float: 'right' }}
                onClick={handleTypeChoose}
                variant="contained"
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <Grid style={{ margin: '2em' }}>
              <Button
                size="small"
                onClick={() => {
                  setUserType('');
                  localStorage.setItem('userType', '');
                }}
                variant="contained"
                sx={{ mt: 3 }}
              >
                Back
              </Button>
            </Grid>
            {!isLoginForm ? (
              <AccountForm
                fieldsArr={SignupFormFields}
                title="Sign Up"
                typeMessage="Already have an account?"
                redirectName="Log In"
                {...formProps}
              ></AccountForm>
            ) : (
              <AccountForm
                fieldsArr={LoginFormFields}
                title="Log In"
                typeMessage="No account?"
                redirectName="Sign Up"
                {...formProps}
              >
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleForgotPassword();
                  }}
                >
                  Forgot your password?
                </Button>
              </AccountForm>
            )}
          </>
        )}
      </Paper>
    </Container>
  );
};

export default LoginPage;
