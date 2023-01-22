import React from 'react'
import { Typography, Grid, Container, Stack, Box, Button, Divider } from '@mui/material'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/store/features/cartSlice'

type Props = {}

function bag({ }: Props) {

    // redux

    const dispatch = useDispatch()
    const cart = useSelector((store) => {
        return (store.cart.items);
        console.log(store.cart.items);

    })

    console.log(cart);


    return (
        <Container maxWidth="xl" sx={{}}>
            <Grid container sx={{ minHeight: "80vh" }}>

                <Grid item xs={12} md={6.8} >
                    <Grid container sx={{ borderBottom: 1, borderColor: 'divider', }}>
                        <Grid item xs={12} sx={{ paddingY: "1rem" }}>
                            <Typography variant="h6" >
                                Bag
                            </Typography>
                        </Grid>

                        {

                            cart.map((item) => (
                                <Grid container sx={{ borderBottom: 1, borderColor: 'divider', paddingY: "0.8rem" }}>
                                    <Grid item xs={3} sx={{}}>
                                        <Box sx={{ width: "100%", height: "10rem", background: "#faf9fa", position: "relative" }}>
                                            <Image src={item.image} alt="" fill style={{ objectFit: "contain", objectPosition: "center" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9} sx={{ padding: "1rem" }}>
                                        <Stack justifyContent="space-between" sx={{ width: "100%", height: "100%", background: "" }}>
                                            <Box sx={{}}>
                                                <Typography variant="body1" sx={{ textTransform: "capitalize" }} >
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body1" >
                                                    {item.price}
                                                </Typography>
                                            </Box>
                                            <Stack justifyContent="space-between" direction="row" alignItems="center">
                                                <Box>Addition and sub</Box>
                                                <Box>
                                                    <Button variant="outlined" onClick={() => {
                                                        dispatch(removeFromCart(item.id))
                                                    }} >
                                                        remove
                                                    </Button>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            ))

                        }

                    </Grid>
                </Grid>
                <Divider orientation='vertical' flexItem />
                <Grid item xs={12} md={5}>
                    <Box sx={{ width: "100%", height: "10rem", background: "" }}>



                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "1.8rem", borderBottom: 1, borderColor: 'divider', opacity: 0.7 }}>
                            <Typography variant="body1" >
                                Subtotal
                            </Typography>
                            <Typography variant="body1" >
                                200
                            </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "1.8rem", borderBottom: 1, borderColor: 'divider', opacity: 0.7, "&:hover": { cursor: "pointer" } }}>
                            <Typography variant="body1" >
                                Do you have any discount coupon
                            </Typography>

                        </Stack>
                        <Box sx={{ padding: "1.8rem", borderBottom: 1, borderColor: 'divider', opacity: 0.7 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" pb={1} >
                                <Typography variant="body1" >
                                    Estimated Delivery Charge
                                </Typography>
                                <Typography variant="body1" >
                                    200
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                                <Typography variant="body1" >
                                    VAT(included)
                                </Typography>
                                <Typography variant="body1" >
                                    200
                                </Typography>
                            </Stack>
                        </Box>

                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ padding: "1.8rem", borderBottom: 1, borderColor: 'divider' }}>
                            <Typography variant="body1" >
                                Total
                            </Typography>
                            <Typography variant="body1" >
                                200
                            </Typography>
                        </Stack>

                        <Grid container sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Grid item xs={6} sx={{ padding: { xs: "0.5rem", md: "0.5rem", lg: "1.3rem" } }}>
                                <Button variant="outlined" fullWidth >
                                    continue shopping
                                </Button>
                            </Grid>
                            <Grid item xs={6} sx={{ padding: { xs: "0.5rem", md: "0.5rem", lg: "1.3rem" } }}>
                                <Button variant="contained" fullWidth  >
                                    check out
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid >

        </Container >
    )
}

export default bag