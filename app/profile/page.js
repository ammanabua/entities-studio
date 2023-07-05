'use client'
import Image from "next/image"
import { Box, Grid } from "@mui/material"



const page = () => {
  return (
    <section className="h-screen w-full bg-white">
        <div className="w-full">
            <h1>Welcome, User</h1>

            <Image 
                src="/user1.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-1/3 lg:w-1/5 h-auto m-auto
                bg-gray-200 rounded"
                alt="user" 
            />

            <Box className="flex border-1 border-grey-600">
                <p className="font-rubik text-2xl">Private Collection</p>
                <Grid className="flex grid-cols-2">
                    <Box>

                    </Box>
                    <Box>
                        
                    </Box>
                </Grid>
            </Box>
        </div>
    </section>
  )
}

export default page