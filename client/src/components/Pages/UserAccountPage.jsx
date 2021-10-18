import React from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../context/AuthContext.jsx';
import { TRANSACTION } from '../../config/pageRoutes';

const UserAccountPage = () => {
  const { logoutUser, currentUser } = useAuth();

  const name = currentUser.displayName || 'Anonymous'; // stored in Firebase
  const joinDate = '7 days ago';
  const transactionId = '1241350';

  // HERE
  const transactions = [
    {
      id: '132135',
      price: '$20',
    },
  ];

  return (
    <>
      <h1>Account Details</h1>

      <figure>
        <img></img>
        <button>Remove</button>
      </figure>

      <figure>
        <h4>Available Credit: {'$20'}</h4>
        <button>Share Code</button>
      </figure>

      <h5>{name}</h5>

      <p>Joined: {joinDate}</p>

      <figure>
        <h3>Subscription:</h3>
        {/* HERE */}
        <select>
          <option value={'active'}>
            Active
          </option>
          <option value={'deactived'}>
            Deactived
          </option>
        </select>
      </figure>

      <figure>
        <h3>Transactions:</h3>
        {transactions.length > 0 ? (
          <p>No transactions found..</p>
        ) : (
          <>
            {transactions.map(({ id }) => (
              <div>
                <p>Transaction ID: {id}</p>
                <p>Total: {'$14.99'}</p>
                <Link to={`${TRANSACTION}?=${id}`}>View</Link>
              </div>
            ))}
          </>
        )}
      </figure>

      <Button onClick={() => logoutUser()}>Log Out</Button>
    </>
  );
};

export default UserAccountPage;
