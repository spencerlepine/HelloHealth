import React, { useState } from 'react';
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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import useMainContext from '../../../context/MainContext.jsx';
import useAuth from '../../../context/AuthContext.jsx';
import { HOME } from '../../../config/pageRoutes';
import useStyles from '../../styles';
import styled from 'styled-components';

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

const FormFields = ({ formEntries, fieldsArr, handleChange }) => (
  <>
    {fieldsArr.map(({ name, placeholder }, i) => (
      <TextField
        key={i}
        onChange={handleChange}
        type={name}
        name={name}
        value={formEntries[name] || ''}
        placeholder={placeholder}
      />
    ))}
  </>
);

const LoginPage = () => {
  const classes = useStyles();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formEntries, setFormEntries] = useState({});
  // const [isFarmerUser, setIsFarmerUser] = useState(false);
  const history = useHistory();

  const {
    loginUser,
    signupUser,
    sendPasswordResetEmail,
    signInWithGoogle,
    signInWithFacebook,
    currentUser,
  } = useAuth();

  const { userType, setUserType } = useMainContext();

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
      signupUser(name, email, password, () => {
        history.push(HOME);
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

  return (

    <>
      {!isLoginForm ? (
        <>
          <FormContainer>
            <Typography variant="h4" gutterBottom component="div">Sign Up Page</Typography>
            <form>
              <FormFields
                fieldsArr={SignupFormFields}
                handleChange={handleChange}
                formEntries={formEntries}
              />
              <Button variant="contained" onClick={handleEmailPassSubmit}>Continue</Button>
            </form>
            <Typography variant="body1">Already have an account?</Typography><a href="/" onClick={(e) => { e.preventDefault(); toggleLoginSignup(); }}>Log In</a>
          </FormContainer>
        </>
      ) : (
        <>
          <FormContainer>
            <Typography variant="h4" gutterBottom component="div">Login Page</Typography>

            <form>
              <FormFields
                fieldsArr={LoginFormFields}
                handleChange={handleChange}
                formEntries={formEntries}
              />
            </form>
            <Button variant="contained" onClick={handleEmailPassSubmit}>Continue</Button>

            <Typography variant="body1">No account? </Typography>
            <Button onClick={(e) => { e.preventDefault(); toggleLoginSignup(); }}>Sign Up</Button>
            <Button onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
              Forgot your password?
            </Button>
          </FormContainer>
        </>
      )}

      <hr></hr>
      <FormContainer>
        <p><Typography variant="body1">OR</Typography></p>
        <Stack spacing={2}>
          <Button variant="outlined" size="small" style={{ maxWidth: '120px' }} onClick={() => handleAccountSubmit(signInWithGoogle)}>
            Sign In With Google
          </Button>
          <Button variant="outlined" size="small" style={{ maxWidth: '120px' }} onClick={() => handleAccountSubmit(signInWithFacebook)}>
            Sign In With Facebook
          </Button>
          {/* <button onClick={signInWithTwitter}> Sign In With Twitter</button> */}
        </Stack>
      </FormContainer>
    </>
  );
};

export default LoginPage;

// <div>
//   <AppBar position="static" alignitems="center" color="primary">
//     <Toolbar>
//       <Grid container justify="center" wrap="wrap">
//         <Grid item>
//           <Typography variant="h6">{BRAND_NAME}</Typography>
//         </Grid>
//       </Grid>
//     </Toolbar>
//   </AppBar>
//   <Grid container spacing={0} justify="center" direction="row">
//     <Grid item>
//       <Grid
//         container
//         direction="column"
//         justify="center"
//         spacing={2}
//         className="login-form"
//       >
//         <Paper
//           variant="elevation"
//           elevation={2}
//           className="login-background"
//         >
//           <Grid item>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//           </Grid>
//           <Grid item>
//             <form onSubmit={this.handleSubmit}>
//               <Grid container direction="column" spacing={2}>
//                 <Grid item>
//                   <TextField
//                     type="email"
//                     placeholder="Email"
//                     fullWidth
//                     name="username"
//                     variant="outlined"
//                     value={this.state.username}
//                     onChange={ }
//                     required
//                     autoFocus
//                   />
//                 </Grid>
//                 <Grid item>
//                   <TextField
//                     type="password"
//                     placeholder="Password"
//                     fullWidth
//                     name="password"
//                     variant="outlined"
//                     value={this.state.password}
//                     onChange={(event) =>
//                       this.setState({
//                         [event.target.name]: event.target.value,
//                       })
//                     }
//                     required
//                   />
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     className="button-block"
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Grid>
//           <Grid item>
//             <Link href="#" variant="body2">
//               Forgot Password?
//             </Link>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
//   </Grid>
// </div>