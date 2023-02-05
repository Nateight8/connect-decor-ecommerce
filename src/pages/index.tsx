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

const inter = Inter({ subsets: ["latin"] });

interface product {
  id: number;
  description: string;
  title: string;
  price: number;
}

interface Props {
  products: product[];
}

export default function Home({ products }: Props) {
  return (
    <main>
      <Hero />
      <Box sx={{ minHeight: "100vh", width: "100%" }}>
        <Typography variant="body1"></Typography>
        <Products products={products} />
      </Box>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
