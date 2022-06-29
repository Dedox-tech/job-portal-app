import React from "react";
import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import JobDetails from "./components/JobDetails";
import { QueryClientProvider, QueryClient } from "react-query";
import AppContextProvider from "./utils/AppContext";
import Main from "./components/Main";
import customTheme from "./utils/customTheme";

const queryClient = new QueryClient();

export default function App() {
    return (
        <Box>
            <CssBaseline />
            <ThemeProvider theme={customTheme}>
                <QueryClientProvider client={queryClient}>
                    <AppContextProvider>
                        <Main />
                    </AppContextProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </Box>
    );
}
