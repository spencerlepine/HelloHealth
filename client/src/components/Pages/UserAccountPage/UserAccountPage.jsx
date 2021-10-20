import React from 'react';
import Button from '@mui/material/Button';
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

  return (
    <Box style={{ padding: '0.1em', margin: '-1em' }}>
      <Box sx={{ x: 2, float: 'right' }}>
        <Button variant="contained" onClick={() => logoutUser()}>
          Log Out
        </Button>
      </Box>

      <h1>Account Details</h1>

      <Paper style={{ padding: '0.5em' }}>
        <h4>Available Credit: ${availableCredit || '0'}</h4>
        <Button variant="contained" onClick={handleCodeShare}>
          Share Code
        </Button>
      </Paper>

      <Paper style={{ padding: '0.5em' }}>
        <h5>{name}</h5>
        <p>{joinDate}</p>
      </Paper>

      <Box component={Grid} container boxShadow={1} sx={{ p: '0.5em' }}>
        <Grid>
          <h3>Subscription</h3>
        </Grid>

        <Grid item>
          <select
            onChange={handleSubscriptionStatus}
            value={subscriptionStatus}
          >
            <option value={'active'}>Active</option>
            <option value={'deactived'}>Deactived</option>
          </select>
        </Grid>
      </Box>

      <Box component={Grid} container boxShadow={1} sx={{ p: '0.5em' }}>
        <Grid container>
          <h3>Transactions</h3>
        </Grid>

        {transactions.length === 0 ? (
          <Grid item>
            <p>No transactions found..</p>
          </Grid>
        ) : (
          <>
            {transactions.map(({ id, price }) => (
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
  );
};

export default UserAccountPage;
