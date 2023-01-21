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
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import theme from '@/components/theme';
import NavBar from '@/components/navcomponent/NavBar';


const inter = Inter({ subsets: ['latin'] })

interface Data {
  id: number;
  title: string;

}

interface Props {
  products: Data[];
}



export default function Home({ products }: Props) {

  // console.log(products);


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

  const res = await fetch("http://localhost:3500/products");
  const data = await res.json();


  return {
    props: {
      products: data
    }
  }

}