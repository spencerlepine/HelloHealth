import React, { useState, useEffect } from 'react';
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

export default function FarmEdit({ info }) {
  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [banner, setBanner] = useState(info.profile_image);
  const [about, setAbout] = useState(info.description);
  const [video, setVideo] = useState(info.video_link);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onType = (e, set) => {
    set(e.target.value);
  };
  const handleImagePreview = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    setBanner(info.profile_image);
  }, [info.profile_image]);

  return (
    <div>
      <Button onClick={handleOpen} startIcon={<EditRoundedIcon />}>
        Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormLabel>
            About:
            <TextField
              id="outlined-multiline-flexible"
              value={about}
              placeholder={info.description}
              multiline
              maxRows={8}
              fullWidth
              onChange={(e) => onType(e, setAbout)}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Button>Update</Button>
            </div>
          </FormLabel>
          <FormLabel>
            Youtube Live Link:
            <TextField
              id="livestream-link"
              multiline
              placeholder={info.video_link}
              value={video}
              maxRows={1}
              fullWidth
              onChange={(e) => onType(e, setVideo)}
            />
          </FormLabel>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button>Update</Button>
          </div>
          <FormLabel>
            Banner Image Link:
            <TextField
              id="banner-image"
              value={banner}
              placeholder={info.profile_image}
              multiline
              maxRows={1}
              fullWidth
              onChange={(e) => onType(e, setBanner)}
            />
          </FormLabel>
          <FormLabel>
            Image Preview:
            <div>
              <img
                style={{ objectFit: 'cover', width: '100px', height: '100px' }}
                src={banner}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Button>Update</Button>
            </div>
          </FormLabel>
          {/* <FormLabel>
            Banner Image:{' '}
            <input
              type="file"
              onChange={handleImagePreview}
              accept=".jpg,.png"
            />
            <div>
              <img
                style={{ objectFit: 'cover', width: '100px', height: '100px' }}
                src={banner}
              />
            </div>
            <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button>Update</Button>
          </div>
          </FormLabel> */}
        </Box>
      </Modal>
    </div>
  );
}
