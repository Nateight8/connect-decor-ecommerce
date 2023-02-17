"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from './page.module.css'
import TextField from "@mui/material/TextField";
// import Button from "../components/Button"
import Typography from "@mui/material/Typography";
import { Button, Box, Grid, ThemeProvider, CssBaseline } from "@mui/material";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Carrousel/Products";
import { GetServerSideProps } from "next";
import Head from "@/app/head";
import { client } from "lib/client";

const inter = Inter({ subsets: ["latin"] });

interface product {
  _id: string;
  details: string;
  name: string;
  price: number;
  image: string;
  slug: { current: string };
}

interface Props {
  products: product[];
}

export default function Home({ products }: Props) {
  // console.log(products[0]);

  return (
    <>
      <Head />
      <main>
        <Box sx={{ padding: "1rem", borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="body1" textAlign="center">
            Home
          </Typography>
        </Box>
        <Hero />
        <Box sx={{ minHeight: "100vh", width: "100%" }}>
          <Typography variant="body1"></Typography>
          <Products products={products} />
        </Box>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const querry = '*[_type == "product"]';
  const products = await client.fetch(querry);

  return {
    props: {
      products,
    },
  };
};
