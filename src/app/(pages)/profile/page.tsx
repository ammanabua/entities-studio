'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Grid, Typography } from '@mui/material'

export default function Page() {
  return (
    <section className="h-auto w-full bg-white px-12">
      <div className="w-3/5 py-12 m-auto">
        <h1 className="mb-4">Welcome, User</h1>

        <Image src="/user.png" width={0} height={0} sizes="100vw" className="w-1/3 lg:w-1/5 h-auto m-auto bg-gray-200 rounded-full p-4" alt="user" />

        <Box className="border-1 border-grey-600 font-rubik mt-16">
          <p className="text-lg mb-8">Private Collection</p>
          <Grid>
            <Box className="flex border border-grey-300 w-full h-60 justify-center items-center">
              <Typography>Your collection is empty!</Typography>
            </Box>
            <div className="mt-4 bg-[#EB6F07] p-4 w-52 text-center hover:bg-gray-200">
              <Link href="/collections">Explore collections</Link>
            </div>
          </Grid>
        </Box>
      </div>
    </section>
  )
}
