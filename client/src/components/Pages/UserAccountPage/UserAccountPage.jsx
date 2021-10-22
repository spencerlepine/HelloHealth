import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import {
  Grid, Paper, Box, Typography,
} from '@material-ui/core';
import useAuth from '../../../context/AuthContext.jsx';
import { TRANSACTION } from '../../../config/pageRoutes';
import { user as userAPI } from '../../../api';

const UserAccountPage = () => {
  const {
    logoutUser, currentUser, accountDetails, setSubscriptionState,
  } = useAuth();
  const {
    referral_code: referralCode,
    credit_available: availableCredit,
    subscription_status: subscriptionStatus,
    transactions,
  } = accountDetails || {};

  const name = currentUser.displayName || 'Anonymous'; // stored in Firebase
  const joinDate = `${Math.round(Math.random() * 35) + 5} days ago`;

  const handleCodeShare = () => {
    window.alert(`Copy this code: ${referralCode}`);
  };

  const handleSubscriptionStatus = (e) => {
    let newStatus = subscriptionStatus;

    if (e.target.value === 'deactivated') {
      newStatus = false;
    }

    if (e.target.value === 'activated') {
      newStatus = true;
    }

    userAPI.updateSubscription(currentUser.uid, newStatus, () => {
      setSubscriptionState(newStatus);
    });
  };

  const validTransactions = transactions instanceof Array ? transactions : [];
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
        a: {
          color: '#fff',
          textDecoration: 'none',
        },
      }}
    >
      <Box style={{ padding: '1.1em', margin: '-1em' }}>
        <Box sx={{ x: 2, float: 'right' }}>
          <Button variant="contained" onClick={() => logoutUser()}>
            Log Out
          </Button>
        </Box>

        <h1>Account Details</h1>

        <Paper style={{ padding: '1.5em', backgroundColor: '#eee' }}>
          <h4>Available Credit: ${availableCredit || '0'}</h4>
          <Button variant="contained" onClick={handleCodeShare}>
            Share Code
          </Button>
        </Paper>

        <Paper style={{ padding: '1.5em', backgroundColor: '#eee' }}>
          <h5>{name}</h5>
          <p>{joinDate}</p>
        </Paper>

        <Box
          component={Grid}
          container
          boxShadow={1}
          sx={{ p: '1.5em', backgroundColor: '#eee' }}
        >
          <Grid style={{ marginRight: '20px' }}>
            <h3>Subscription</h3>
          </Grid>

          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <select
              onChange={handleSubscriptionStatus}
              value={subscriptionStatus}
            >
              <option value={'active'}>Active</option>
              <option value={'deactived'}>Deactived</option>
            </select>
          </Grid>
        </Box>

        <Box
          component={Grid}
          container
          boxShadow={1}
          sx={{ p: '0.5em', backgroundColor: '#eee' }}
        >
          <Grid container>
            <h3>Transactions</h3>
          </Grid>

          {validTransactions.length === 0 ? (
            <Grid item>
              <p>No transactions found..</p>
            </Grid>
          ) : (
            <>
              {validTransactions.map(({ id, price }) => (
                <Box component={Grid} container item key={id}>
                  <Box component={Typography} sx={{ p: '0.2em' }}>
                    Transaction ID: {id}
                  </Box>
                  <Box component={Typography} sx={{ p: '0.2em' }}>
                    Total: {price}
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{ p: '0.2em', background: '#b4caff' }}
                  >
                    <Link to={`${TRANSACTION}?=${id}`}>View</Link>
                  </Button>
                </Box>
              ))}
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default UserAccountPage;
