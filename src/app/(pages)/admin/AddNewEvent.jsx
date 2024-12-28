'use client'
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import NewArtForm from "@/src/components/NewArtForm";
import NewEventForm from "@/src/components/NewEventForm";


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

export default function AddNewEvent() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Image
                src='/newevent.png'
                height={60}
                width={60}
                alt="Add New
                        Event"
                className="m-auto"
            />
            <Button onClick={handleOpen}>Add New Event</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        New Event
                    </Typography>
                    <NewEventForm />
                </Box>
            </Modal>
        </Box>
    )
}