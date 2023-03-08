import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import Link from "next/link";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import TabLink from "./TabLink";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "@/store/features/cartSlice";
import MenuCom from "./MenuCom";
import BreadcrumbsComp from "./BreadcrumbsComp";
import { useAppSelector } from "@/store/store";

type Props = {};

function NavBar({}: Props) {
  // useStates
  const [value, setValue] = useState("Shop");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const [open, setOpen] = useState(false)

  // handlers
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  // redux
  const cart = useAppSelector((store) => {
    return store.cart.items;
  });

  const bag = `Bag ( ${cart.length} )`;

  // console.log(cart);

  return (
    <>
      {/* <AppBar position="sticky" color='transparent' > */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="xl">
          <TabContext value={value}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <TabList
                onChange={handleChange}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Tab label="Shop" value="Shop" component={Link} href="/" />
                <Tab label="Search" value="Search" component={Link} href="/" />
                <Tab label="About" value="About" component={Link} href="/" />
              </TabList>
              <Typography
                variant="body1"
                sx={{ paddingY: { xs: "1rem", md: 0 } }}
              >
                Disconnect
              </Typography>
              <TabList
                onChange={handleChange}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <Tab label="Help" value="Help" />
                <Tab label="Account" value="Account" />
                <Tab label={bag} value="Bag" onClick={handleClick} />
              </TabList>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                {/* <DrawerComponent open={open}  setOpen={setOpen}/> */}
                <DrawerComponent cart={cart.length} />
              </Box>
            </Stack>
          </TabContext>
          <MenuCom
            anchorEl={anchorEl}
            open={open}
            handleClose={handleClose}
            cart={cart}
          />
        </Container>
      </Box>

      {/* <BreadcrumbsComp /> */}
    </>

    // </AppBar>
  );
}

export default NavBar;
