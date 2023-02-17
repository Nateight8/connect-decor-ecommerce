import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Typography,
  Box,
  Container,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";

import "swiper/css";
// import data from '../data';
import Image from "next/image";
// import data from '../data';
import Product from "./Product";

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

function Products({ products }: Props) {
  console.log(products);

  return (
    <Container maxWidth="xl">
      <Box sx={{ marginY: "1.25rem" }}>
        <Box
          sx={{
            paddingY: "1.25rem",
            borderBottom: 1,
            borderColor: "divider",
            marginBottom: "1.25rem",
          }}
        >
          <Typography variant="body2">New Arrivals</Typography>
        </Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 4.6,
              spaceBetween: 30,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
          style={{ height: "content", padding: "1rem" }}
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <Product product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Container>
  );
}

export default Products;
