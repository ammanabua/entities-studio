import { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import NewArtForm from "@/src/components/NewArtForm";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
    borderRadius: 2,
  p: 4,
};

export default function AddNewArt() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Image
        src='/paint.png'
        height={60}
        width={60}
        alt="Add New Artwork"
        className="m-auto"
      />
      <Button onClick={handleOpen}>Add New Art</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="">
          <Typography id="modal-modal-title" variant="h6" component="h3">
            New Art
          </Typography>
            <NewArtForm />
        </Box>
      </Modal>
    </Box>
  )
}