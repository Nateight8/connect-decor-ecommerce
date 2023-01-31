'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import TextField from '@mui/material/TextField'
// import Button from "../components/Button"
import Typography from '@mui/material/Typography'
import { Button, Box, Grid, ThemeProvider, CssBaseline } from '@mui/material'
import Hero from '@/components/Hero/Hero';
import Products from '@/components/Carrousel/Products';
import { GetServerSideProps } from 'next';



const inter = Inter({ subsets: ['latin'] })

interface products {
  id: string;
  description: string;
  name: string;
  price: number;
}

interface Props {
  data: products[];
}



export default function Home({ data }: Props) {



  const products = data.products
  const pdt = data
  console.log(pdt);

  return (

    <main >
      <Hero />
      <Box sx={{ minHeight: "100vh", width: "100%" }} >
        <Typography variant="body1" >
        </Typography>
        <Products products={products} />
      </Box>
    </main>


  )
}



export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch("https://raw.githubusercontent.com/Nateight8/connect-json/main/connect.json")

  const data = await res.json()

  return {
    props: {
      data,
    }
  }

}