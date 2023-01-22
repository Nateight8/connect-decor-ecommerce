import React from 'react'
import Container from '@mui/material/Container'
// import data from '../data'
import Grid from '@mui/material/Grid'
import { Box, Stack, Typography, Button, Divider } from '@mui/material'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/store/features/cartSlice'

type Props = {

    product: {
        image: string;
        name: string;
        price: number;
        description: string;
        id: number;
    };
}


function Description({ product }: Props) {

    const dispatch = useDispatch()

    const handleClick = () => {

        const { name, price, image, id } = product

        let payloadData = { image, name, price, id }

        let pay = dispatch(addToCart(payloadData))
        // console.log(pay);

    };


    const gridItem = { padding: { sm: "1.5rem", md: "4.75rem" }, background: "#faf9fa", minHeight: "16rem" }
    return (

        <Container maxWidth="xl">

            <Stack justifyContent="center" alignItems="center" sx={{ height: "90vh", width: "100%" }}>
                <Grid container sx={{ height: "70vh" }}>
                    <Grid item xs={12} md={6} sx={gridItem}>
                        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                            <Image src={product.image} alt="" fill style={{ objectFit: "contain" }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ paddingY: "1rem", paddingX: { md: "2.5rem" } }}>
                            <Stack sx={{ flexDirection: { sm: "row", md: "column" }, justifyContent: { sm: "space-between" }, alignItems: { sm: "center", md: "start" } }}>
                                <Box sx={{ paddingInline: "0.5rem", paddingBlock: { xs: "0.5rem", sm: "1.25rem" } }}>
                                    <Typography variant="h5" >
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ opacity: 0.7 }} >
                                        $ {product.price}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginBottom: { sm: "1rem" } }}>
                                    <Button variant="contained" onClick={handleClick} >
                                        Add to Bag
                                    </Button>
                                </Box>
                            </Stack>
                            <Box sx={{ marginY: { xs: "1rem", md: "2.25rem" } }}>
                                <Divider />
                                <Typography variant="body1" sx={{ paddingY: { xs: "0.7rem", sm: "1.25rem" }, opacity: 0.6, paddingX: "0.5rem" }} >
                                    Delivery to 25 countries
                                </Typography>
                                <Divider />
                            </Box>
                            <Box sx={{ opacity: 0.6, paddingX: "0.5rem" }} >
                                <Typography variant="body1" >
                                    {product.description}
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
            </Stack>

        </Container>


    )
}

export default Description