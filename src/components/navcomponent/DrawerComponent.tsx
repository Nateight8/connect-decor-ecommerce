import React, { useState } from "react";
import {
  Drawer,
  Box,
  Tab,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  Link,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  // open: boolean
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>
  cart: number;
};

function DrawerComponent({ cart }: Props) {
  const [open, setOpen] = useState(false);
  const Open = () => {
    setOpen(!open);
  };

  return (
    <>
      <MenuIcon onClick={Open} />

      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={Open}
        sx={{
          ".MuiDrawer-paper": {
            background: "#32323D",
            color: "whitesmoke",
          },
        }}
      >
        <Box sx={{ minWidth: { xs: "85vw", sm: "18rem" }, padding: "1rem" }}>
          <Typography mb={1} variant="h5">
            Disconnect
          </Typography>
          <Divider />
          <List>
            {["Shop", "Search", "About", "Help", "Account"].map((item) => {
              return (
                <ListItem key={item}>
                  <ListItemButton>
                    <Link underline="none">
                      {/* href="/" */}
                      <ListItemText
                        sx={{ color: "white", opacity: 0.8 }}
                        primary={item}
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              );
            })}
            <ListItem>
              <ListItemButton>
                <Link underline="none" href="/bag">
                  <ListItemText
                    sx={{ color: "white", opacity: 0.8 }}
                    primary={`Bag (${cart})`}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerComponent;
