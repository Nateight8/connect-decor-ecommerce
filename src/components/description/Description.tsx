import React from "react";
import Container from "@mui/material/Container";
// import data from '../data'
import Grid from "@mui/material/Grid";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import { urlFor } from "lib/client";

type Props = {
  product: {
    image: string;
    name: string;
    price: number;
    details: string;
    _id: string;
  };
};

function Description({ product }: Props) {
  const dispatch = useDispatch();
  const { name, price, details, image } = product;

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  const gridItem = {
    // padding: { sm: "1.5rem", md: ".75rem" },
    padding: "0.75rem",
    background: "#faf9fa",
    minHeight: "16rem",
  };

  console.log(product);

  return (
    <Container maxWidth="xl">
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "90vh", width: "100%" }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid item xs={12} md={6} sx={gridItem}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                src={urlFor(image)}
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingY: "1rem", paddingX: { md: "2.5rem" } }}>
              <Stack
                sx={{
                  flexDirection: { sm: "row", md: "column" },
                  justifyContent: { sm: "space-between" },
                  alignItems: { sm: "center", md: "start" },
                }}
              >
                <Box
                  sx={{
                    paddingInline: "0.5rem",
                    paddingBlock: { xs: "0.5rem", sm: "1.25rem" },
                  }}
                >
                  <Typography variant="h5">{name}</Typography>
                  <Typography variant="h6" sx={{ opacity: 0.7 }}>
                    $ {price}
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: { sm: "1rem" } }}>
                  <Button variant="contained" onClick={handleClick}>
                    Add to Bag
                  </Button>
                </Box>
              </Stack>
              <Box sx={{ marginY: { xs: "1rem", md: "2.25rem" } }}>
                <Divider />
                <Typography
                  variant="body1"
                  sx={{
                    paddingY: { xs: "0.7rem", sm: "1.25rem" },
                    opacity: 0.6,
                    paddingX: "0.5rem",
                  }}
                >
                  Delivery to 25 countries
                </Typography>
                <Divider />
              </Box>
              <Box sx={{ opacity: 0.6, paddingX: "0.5rem" }}>
                <Typography variant="body1">{details}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default Description;
