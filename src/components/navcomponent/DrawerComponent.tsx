import React, { useState } from 'react'
import { Drawer, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';



type Props = {
    // open: boolean
    // setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DrawerComponent({ }: Props) {


    const [open, setOpen] = useState(false)
    const Open = () => {
        setOpen(!open)
    }

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
                        color: "whitesmoke"
                    }
                }}

            >
                <Box sx={{ minWidth: { xs: "70vw", sm: "18rem" }, padding: "1rem" }}>
                    hello
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerComponent