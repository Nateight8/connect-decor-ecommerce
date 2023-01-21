import React from 'react'
import { Typography, Box, Container, Card, CardActionArea, CardContent } from '@mui/material'
import { SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cartSlice';
import Link from 'next/link';


type Props = {
    image: string, name: string, price: number, id: string
}



function Product({ image, name, price, id }: Props) {




    return (

        <Card sx={{ maxWidth: 345 }}>
            <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
                <CardActionArea >
                    <Box sx={{ width: "100%", height: "15rem", background: "", position: "relative", }}>
                        <Image src={image} alt="" fill style={{ objectFit: "contain" }} />
                    </Box>
                    <CardContent >
                        <Typography variant="h6" sx={{ color: "black", textAlign: "center" }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "black", textAlign: "center", opacity: 0.6 }}>
                            $ {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>

    )
}

export default Product