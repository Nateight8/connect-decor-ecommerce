import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Carrousel from './Carrousel'
// import img from 

type Props = {}

function Hero({ }: Props) {
    return (
        <Box>
            <Box sx={{ padding: "1rem", borderBottom: 1, borderColor: 'divider', }}>
                <Typography variant="body2" textAlign="center" >
                    Home
                </Typography>
            </Box>
            <Carrousel />
            <Box sx={{ borderBottom: 1, borderColor: 'divider', }} />
        </Box>
    )
}

export default Hero