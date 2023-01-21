import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import { Typography, Box, Container, Card, CardActionArea, CardContent } from '@mui/material'

import "swiper/css";
// import data from '../data';
import Image from 'next/image';
// import data from '../data';
import Product from './Product';

interface Data {
    id: number;
    title: string;

}

interface Props {
    products: Data[];
}

function Products({ products }: Props) {



    return (

        <Container maxWidth="xl">
            <Box sx={{ marginY: "1.25rem", }}>
                <Box sx={{ paddingY: "1.25rem", borderBottom: 1, borderColor: 'divider', marginBottom: "1.25rem" }}>
                    <Typography variant="body2"  >
                        New Arrivals
                    </Typography>
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
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 35,
                        },
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                    style={{ height: "content", padding: "1rem", }}

                >

                    {
                        products.map(({ id, image, name, price }) => (
                            <SwiperSlide key={id} >
                                <Product image={image} name={name} price={price} id={id} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>

        </Container>
    )
}

export default Products