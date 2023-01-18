import Test from '@/pages/test';
import Testtwo from '@/pages/testtwo';
import { TabContext } from '@mui/lab'
import TabList from '@mui/lab/TabList'
import { Box, AppBar, Tabs, Tab, Typography, Stack, Container, } from '@mui/material'
import Link from 'next/link';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react'
import DrawerComponent from './DrawerComponent';
import TabLink from './TabLink';



type Props = {}

function NavBar({ }: Props) {
    const [value, setValue] = useState("Shop")
    // const [open, setOpen] = useState(false)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

    };



    // const Open = () => {
    //     setOpen(true)
    // }



    return (
        // <AppBar position="sticky" color='transparent' >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
            <Container maxWidth="xl">

                <TabContext value={value}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" >
                        <TabList onChange={handleChange} sx={{ display: { xs: "none", md: "flex" } }}>

                            <Tab label="Shop" value="Shop" component={Link} href="/" />
                            <Tab label="Search" value="Search" component={Link} href="/" />
                            <Tab label="About" value="About" component={Link} href="/" />

                        </TabList>
                        <Typography variant="body1" sx={{ paddingY: { xs: "1rem", md: 0 } }} >
                            Disconnect
                        </Typography>
                        <TabList onChange={handleChange} sx={{ display: { xs: "none", md: "flex" } }}>

                            <Tab label="Help" value="Help" />
                            <Tab label="Account" value="Account" />
                            <Tab label="Bag" value="Bag" />
                        </TabList>
                        <Box sx={{ display: { xs: "flex", md: "none" } }} >
                            {/* <DrawerComponent open={open}  setOpen={setOpen}/> */}
                            <DrawerComponent />
                        </Box>

                    </Stack>
                </TabContext>

            </Container>
        </Box >
        // </AppBar>

    )
}

export default NavBar