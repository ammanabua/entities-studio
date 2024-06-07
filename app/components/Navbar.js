'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

export default function Navbar () {

    const pathname = usePathname();
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const isActive = (href) => pathname === href;

    
    
    return (
        <nav className={`font-krona flex w-full align-center items-center justify-between box-border top-0 left-0 right-0 px-12 py-8 ${isActive('/collections/tamas-art') ? 'bg-[#FF6868]' : ''} ${isActive('/cart') ? 'bg-white' : ''}`}>
            <Link href="/">
                <Image
                    src="/head.png"
                    width={95}
                    height={70}
                    alt="Entities Studio"
                    style={{
                        maxWidth: "100%",
                        height: "auto"
                    }} />
            </Link>

            <ul className="justify-between items-center w-1/4 list-none bg-none font-krona text-lg hidden lg:flex space-x-8">
                <Link className={`un ${isActive('/collections') ? "active" : ''}`} href='/collections'>Collections</Link>
                <Link className={`un ${isActive('/events') ? "active" : ''}`} href='/events'>Events</Link>
                <Link className={`un ${isActive('/about') ? "active" : ''}`} href='/about'>Bio</Link>
            </ul>

            <div className='invisible lg:visible'>
                <div className="flex items-center">
                    <Link href="/profile" passHref>
                        <div className='mr-4 pointer'>
                        <Image src="/user1.png" alt="" width="20" height="20" />
                        </div>
                    </Link>
                    <Link href="/cart" passHref>
                        <div className='flex'>
                            <Image src="/cart.png" alt="" width="25" height="25" />
                            <div className=''>2</div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* HAMBURGER MENU FOR MOBILE SCREENS */}
            <div className="lg:hidden flex items-center">
                <button onClick={handleOpen} className="outline-none mobile-menu-button p-4">
                <svg
                    className="w-6 h-6 text-black"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </button>
            </div>

            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box className="absolute w-full h-screen bg-white px-12">
                <Box className="flex justify-between items-center">
                    <Link href='/' onClick={handleClose}>
                        <Image src='/head.png' height={70} width={95} alt="Entities Studo" />
                    </Link>
                    <Typography className="text-center" onClick={handleClose}>
                        X
                    </Typography>
                </Box>
                <ul className="bg-transparent pt-36 font-rubik text-3xl font-light">
                    <Link href="/collections" className="block px-2 py-4" onClick={handleClose}>Collections</Link>
                    <Link href="/events" className="block px-2 py-4 hover:underline" onClick={handleClose}>Events</Link>
                    <Link href="/about" className="block px-2 py-4 hover:underline" onClick={handleClose}>Bio</Link>
                </ul>
            </Box>
            </Modal>
        </nav>
    );
}