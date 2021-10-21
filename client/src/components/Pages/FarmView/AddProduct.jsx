import React, { useState, useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ToggleButton from '@mui/material/ToggleButton';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function AddProduct() {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState(
    'https://images.unsplash.com/photo-1558818498-28c1e002b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80',
  );
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleImagePreview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const onType = (e, set) => {
    set(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<AddIcon />}>
        Add Products
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormLabel>
            Name:
            <TextField
              id="banner-image"
              label="Name"
              multiline
              maxRows={1}
              fullWidth
              value={name}
              onChange={(e) => onType(e, setName)}
            />
          </FormLabel>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          ></div>
          <FormLabel>
            Description:
            <TextField
              id="outlined-multiline-flexible"
              label="Description (be as detailed as possible!)"
              multiline
              maxRows={8}
              fullWidth
              value={description}
              onChange={(e) => onType(e, setDescription)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            ></div>
          </FormLabel>
          <FormLabel>
            Price:
            <TextField
              id="outlined-multiline-flexible"
              label="Please list your price.."
              multiline
              maxRows={8}
              fullWidth
              value={description}
              onChange={(e) => onType(e, setDescription)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            ></div>
          </FormLabel>
          <FormLabel>
            Product Image URL:
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={8}
              fullWidth
              value={image}
              onChange={(e) => onType(e, setImage)}
            />
          </FormLabel>
          <div>
            <img
              style={{ objectFit: 'cover', width: '100px', height: '100px' }}
              src={image}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button startIcon={<AddIcon />}>Add Products</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
