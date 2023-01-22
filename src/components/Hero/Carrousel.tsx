import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

type Props = {}

function Carrousel({ }: Props) {


    const carrouselImages = [
        { image: '/imgs/2.jpg' },
        { image: '/imgs/1.jpg' },
        { image: '/imgs/3.jpg' },
    ]


    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => {
                    // console.log('slide change')
                }}
                onSwiper={(swiper) => {
                    // console.log(swiper)
                }}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                    // duration: 1000,
                }}
                modules={[Autoplay]}
                loop={true}
            >
                {
                    carrouselImages.map(({ image }) => (
                        <SwiperSlide key={image}>
                            <Box sx={{ minHeight: { xs: "70vh", sm: "80vh" }, width: "100%", background: { xs: "#e7e6e8", sm: "blue", md: "red", }, position: "relative", marginBlock: "0.2rem", }}>
                                <Box sx={{ background: "black", width: "100%", height: "100%", position: "absolute", zIndex: 100, opacity: 0.35 }} />
                                <Image src={image} alt="image" fill style={{ objectFit: "cover", objectPosition: "bottom" }} />
                                <Box sx={{ zIndex: 150, position: "absolute", top: "65%", left: "5%", color: "white", maxWidth: "26rem", }}>
                                    <Typography variant="h1" sx={{ fontWeight: 400, fontSize: { xs: "2.5rem" } }}>
                                        The Place to shop
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 400 }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis laudantium obcaecati ullam perferendis qui explicabo!
                                    </Typography>
                                </Box>

                            </Box>
                        </SwiperSlide>
                    ))

                }


            </Swiper>
        </div >
    )
}

export default Carrousel