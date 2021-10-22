import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import landingPage from './landingPage.jpg';

const style = {
  position: 'absolute',
  maxWidth: '1536px',
  width: '80vw',
  height: '80vh',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
  overflow: 'scroll',
};

export default function LandingModal({ showModal, setShowModal }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal open={showModal} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h2">Welcome to HelloHealth</Typography>
          <img src={landingPage} width="100%" />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Support Local, Support Health.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{ mt: 2 }}
            onClick={handleClose}
          >
            Enter
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
