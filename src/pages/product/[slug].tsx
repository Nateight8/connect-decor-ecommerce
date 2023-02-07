import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import {
  Box,
  Breadcrumbs,
  Link,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Description from "@/components/description/Description";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Head from "@/app/head";

type Props = {
  product: {
    image: string;
    title: string;
    price: number;
    description: string;
    id: number;
  };
};

export default function Product({ product }: Props) {
  console.log(product);

  return (
    <>
      <Head />
      <main>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "1rem", borderBottom: 1, borderColor: "divider" }}
        >
          <Breadcrumbs>
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography variant="body1" textAlign="center">
              Product
            </Typography>
          </Breadcrumbs>
        </Stack>
        <Description product={product} />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((path: { id: number }) => {
    return {
      params: { slug: path.id.toString() },
    };
  });

  // console.log(data);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id = context.params?.slug;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
