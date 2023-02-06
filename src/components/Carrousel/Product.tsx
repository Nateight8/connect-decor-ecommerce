import React from "react";
import {
  Typography,
  Box,
  Container,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/features/cartSlice";
import Link from "next/link";

// type Props = {
//   image: string;
//   name: string;
//   price: number;
//   id: string;
// };

interface Props {
  product: {
    id: number;
    description: string;
    title: string;
    price: number;
    image: string;
  };
}

function Product({ product }: Props) {
  const { image, title, price, id } = product;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <Box
            sx={{
              width: "100%",
              height: "15rem",
              background: "",
              position: "relative",
              padding: "1rem",
            }}
          >
            <Image src={image} alt="" fill style={{ objectFit: "contain" }} />
          </Box>
          <CardContent>
            <div
              style={{
                textOverflow: "ellipsis",
                overflowX: "hidden",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                // nowrap
                sx={{
                  color: "black",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {title}
              </Typography>
            </div>
            <Typography
              variant="body2"
              sx={{
                color: "black",
                textAlign: "center",
                opacity: 0.6,
              }}
            >
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default Product;
