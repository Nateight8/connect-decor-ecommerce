import { Box, Container, Typography, Stack } from '@mui/material'
import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <Box component={"footer"} sx={{ width: "100%", height: "", background: "#34323d", color: "whitesmoke" }}>
            <Container maxWidth="xl">
                <Stack justifyContent="center" alignItems="center" sx={{ height: "14vh" }}>
                    <Typography variant="h5" textAlign="center" >
                        Disconnect
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ height: "10vh", borderTop: 1, borderColor: '#393742', }}>
                    <Typography variant="body1" sx={{ fontWeight: 300 }} >Dev By Nate </Typography>
                    <Typography variant="body1" >B</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 300 }} >secure payment</Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer