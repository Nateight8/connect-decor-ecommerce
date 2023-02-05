import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Container,
  Stack,
  Box,
  Button,
  Divider,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, sumTotal } from "@/store/features/cartSlice";
import InputComp from "@/components/search/InputComp";
import { useRouter } from "next/router";
import { useAppSelector } from "@/store/store";
// import { truncateSync } from 'fs'

type Props = {};

function Home({}: Props) {
  // use State

  const [open, setOpen] = useState(false);

  // redux

  const dispatch = useDispatch();

  const cart = useAppSelector((store) => {
    return store.cart;
    // console.log(store.cart.items);
  });

  console.log(cart);

  const router = useRouter();

  return (
    <Container maxWidth="xl" sx={{}}>
      <Grid container sx={{ minHeight: "80vh" }}>
        <Grid item xs={12} md={6.8}>
          <Grid container sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Grid item xs={12} sx={{ paddingY: "1rem" }}>
              <Typography variant="h6">Bag</Typography>
            </Grid>

            {cart.items.map((item) => (
              <Grid
                key={item.name}
                container
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  paddingY: "0.8rem",
                }}
              >
                <Grid item xs={3} sx={{}}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "10rem",
                      background: "#faf9fa",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={9} sx={{ padding: "1rem" }}>
                  <Stack
                    justifyContent="space-between"
                    sx={{ width: "100%", height: "100%", background: "" }}
                  >
                    <Box sx={{}}>
                      <Typography
                        variant="body1"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body1">{item.price}</Typography>
                    </Box>
                    <Stack
                      justifyContent="space-between"
                      direction="row"
                      alignItems="center"
                    >
                      <Box>Addition and sub</Box>
                      <Box>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            dispatch(removeFromCart(item.id));
                          }}
                        >
                          remove
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={12} md={5}>
          <Box sx={{ width: "100%", height: "10rem", background: "" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "1.8rem",
                borderBottom: 1,
                borderColor: "divider",
                opacity: 0.7,
              }}
            >
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="body1">{cart.total}</Typography>
            </Stack>

            <Box sx={{ borderBottom: 1, borderColor: "divider", opacity: 0.7 }}>
              <ListItemButton
                onClick={() => {
                  setOpen(!open);
                }}
                sx={{ padding: "1.8rem" }}
              >
                <ListItemText primary="Do you have any discount coupon?" />
              </ListItemButton>
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                sx={{ padding: "1.8rem" }}
              >
                <InputComp />
              </Collapse>
            </Box>

            <Box
              sx={{
                padding: "1.8rem",
                borderBottom: 1,
                borderColor: "divider",
                opacity: 0.7,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                pb={1}
              >
                <Typography variant="body1">
                  Estimated Delivery Charge
                </Typography>
                <Typography variant="body1">200</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">VAT(included)</Typography>
                <Typography variant="body1">200</Typography>
              </Stack>
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                padding: "1.8rem",
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Typography variant="body1">Total</Typography>
              <Typography variant="body1">200</Typography>
            </Stack>

            <Grid container sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Grid
                item
                xs={6}
                sx={{ padding: { xs: "0.5rem", md: "0.5rem", lg: "1.3rem" } }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  continue shopping
                </Button>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ padding: { xs: "0.5rem", md: "0.5rem", lg: "1.3rem" } }}
              >
                <Button variant="contained" fullWidth>
                  check out
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
