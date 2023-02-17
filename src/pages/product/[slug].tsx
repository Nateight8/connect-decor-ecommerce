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
import { client } from "lib/client";

type Props = {
  product: {
    _id: string;
    details: string;
    name: string;
    price: number;
    image: string;
    slug: { current: string };
  };
};

export default function Product({ product }: Props) {
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
  const querry = '*[_type == "product"]';
  const products = await client.fetch(querry);

  const paths = products.map((path: any) => {
    const { slug } = path;
    const { current } = slug;

    return {
      params: { slug: current },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug;
  const querry = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(querry);

  return {
    props: {
      product,
    },
  };
};
