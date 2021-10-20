import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ToggleButton from '@mui/material/ToggleButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Nutrition from '../../Product/Nutrition.jsx';

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

export default function ProductEdit({ info }) {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState(info);
  const [description, setDescription] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onType = (e, set) => {
    set(e.target.value);
  };

  const handleImagePreview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<EditRoundedIcon />}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <FormLabel>Banner:
          <TextField
            id="banner-image"
            label="Banner Link"
            value={name}
            multiline
            maxRows={1}
            fullWidth
            onChange={(e) => onType(e, setName)}
          />
         </FormLabel>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button>Update</Button>
        </div>
        <FormLabel>Description:
          <TextField
            id="outlined-multiline-flexible"
            label="About"
            multiline
            maxRows={8}
            fullWidth
            value={description}
            onChange={(e) => onType(e, setDescription)}
          />
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Button>Update</Button>
        </div>
        </FormLabel>
        <FormLabel>
          Product Image: {' '}
          <input type="file" onChange={handleImagePreview} accept=".jpg,.png" />
          <div>
          <img style={{ objectFit: 'cover', width: '100px', height: '100px' }}src={image} />
          </div>
        </FormLabel>
        </Box>
      </Modal>
    </div>
  );
}
