import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import landingPage from './banner_edit.jpg';

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
          <img src={landingPage} width="100%" />
          <Typography variant="h5" sx={{ mt: 2 }}>
            Support Local, Support Health.
          </Typography>
          <Button
            variant="contained"
            name="enter"
            size="large"
            sx={{ mt: 2, backgroundColor: '#264653', color: '#FFF' }}
            onClick={handleClose}
          >
            Enter
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
