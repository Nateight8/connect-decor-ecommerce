'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import TextField from '@mui/material/TextField'
// import Button from "../components/Button"
import Typography from '@mui/material/Typography'
import { Button, Box, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/material';
import theme from '@/components/theme';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '@/components/navcomponent/NavBar';
import Hero from '@/components/Hero/Hero';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <main >
        <NavBar />
        <Hero />
        <Box sx={{ minHeight: "100vh", width: "100%" }} />
      </main>
    </ThemeProvider >
  )
}
