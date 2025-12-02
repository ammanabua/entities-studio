import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Image from 'next/image'
import NewCollectionForm from '@/src/app/(pages)/admin/NewCollectionForm'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4
}

export default function AddNewCollection() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="">
      <Image src="/collection.png" height={60} width={60} alt="Add New Collection" className="m-auto" />
      <Button onClick={handleOpen}>Add New Collection</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style} className="">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Collection
          </Typography>
          <NewCollectionForm />
        </Box>
      </Modal>
    </div>
  )
}
