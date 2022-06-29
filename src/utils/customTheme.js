import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#9C27B0",
        },
        secondary: {
            main: "#CAE5FF",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            custom: 780,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default customTheme;
