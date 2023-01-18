import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#00ff00',
        },
    },


    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        // textTransform: 'capitalize',
                        background: "#33343c",
                        borderRadius: 0,
                        marginInline: "0.5rem",
                        letterSpacing: 1.3,
                        // paddingInline: "32px",

                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        textTransform: 'capitalize',
                        color: "#33343c",
                        borderRadius: 0,
                        marginInline: "0.5rem",
                        letterSpacing: 1.3,

                    },
                },
            ],
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // Some CSS
                    fontSize: "0.8rem", textTransform: "capitalize", fontWeight: 500,
                },
            }
        }
    },










});

export default theme