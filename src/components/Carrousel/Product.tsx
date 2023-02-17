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
import { urlFor } from "lib/client";

// type Props = {
//   image: string;
//   name: string;
//   price: number;
//   id: string;
// };

interface Props {
  product: {
    _id: string;
    details: string;
    name: string;
    price: number;
    image: string;
    slug: { current: string };
  };
}

function Product({ product }: Props) {
  const { image, name, price, _id, slug } = product;

  console.log(urlFor(image));

  // let imgUrl = urlFor(product.image);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link
        href={`/product/${slug.current}`}
        style={{ textDecoration: "none" }}
      >
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
            <Image
              src={urlFor(image)}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
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
                {name}
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
