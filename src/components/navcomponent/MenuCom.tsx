import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Divider, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/features/cartSlice";
import { useRouter } from "next/router";
// import Link from 'next/link'

interface item {
  image: string;
  title: string;
  price: number;
  id: number;
}

interface Props {
  anchorEl: any;
  cart: item[];
  handleClose: () => void;
  open: boolean;
}

function MenuCom({ anchorEl, open, handleClose, cart }: Props) {
  const dispatch = useDispatch();

  // const removeItemClick =
  const router = useRouter();

  return (
    <Menu
      id=""
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          maxHeight: "28rem",
          width: "23rem",
        },
      }}
    >
      {cart.length === 0 ? (
        <MenuItem
          disableRipple
          disableTouchRipple
          sx={{
            borderTop: 1,
            borderColor: "divider",
            paddingY: "1rem",
            "&:hover": { background: "white", cursor: "default" },
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%", height: "8rem" }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontWeight: 400 }}
            >
              Your bag is empty
            </Typography>
          </Stack>
        </MenuItem>
      ) : (
        <>
          {cart.map((item, idx) => (
            <Box key={item.image} sx={{ paddingInline: "rem" }}>
              <MenuItem
                disableTouchRipple
                sx={{ "&:hover": { background: "white", cursor: "default" } }}
              >
                <Grid container sx={{ width: "100%" }}>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      padding: "1rem",
                      background: "#faf9fa",
                      height: "8rem",
                    }}
                  >
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={7} sx={{ padding: "0.5rem", background: "" }}>
                    <Stack
                      justifyContent="start"
                      sx={{ width: "100%", height: "100%", background: "" }}
                    >
                      <Box
                        sx={{ height: "100%", width: "100%", background: "" }}
                      >
                        <Typography variant="body1">{item.title}</Typography>
                        <Typography variant="body1">$ {item.price}</Typography>
                      </Box>
                      <Stack
                        justifyContent="end"
                        alignItems="end"
                        sx={{ background: "", height: "100%", width: "100%" }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            dispatch(removeFromCart(item.id));
                          }}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </MenuItem>
              <Box sx={{ paddingX: "1rem" }}>
                <Divider />
              </Box>
            </Box>
          ))}
          <MenuItem
            disableRipple
            disableTouchRipple
            sx={{
              borderTop: 1,
              borderColor: "divider",
              paddingY: "1rem",
              "&:hover": { background: "white" },
            }}
          >
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                handleClose();
                router.push("/bag");
              }}
            >
              View Your Bag
            </Button>
          </MenuItem>
        </>
      )}
    </Menu>
  );
}

export default MenuCom;
