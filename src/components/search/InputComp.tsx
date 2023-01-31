import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'

type Props = {}

function InputComp({ }: Props) {

    const [value, setValue] = useState("")


    // styles
    const InputWraper = styled('form')(({ theme }) => ({
        position: 'relative',
        borderRadius: 0,
        display: "flex",

        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(1),
        //     width: 'auto',
        // },
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        border: "1px solid #e9e9e9",
        '& .MuiInputBase-input': {
            padding: theme.spacing(1),

        },
    }));


    return (
        <InputWraper>

            <StyledInputBase placeholder='enter code here...' />
            <Button variant="outlined" sx={{ paddingX: "1.8rem" }}>
                Apply
            </Button>

        </InputWraper>
    )
}

export default InputComp