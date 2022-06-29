import React, { useContext } from "react";
import { Box, Typography, Container } from "@mui/material";
import CustomAppBar from "./CustomAppBar";
import ListFavoritesJobs from "./ListFavoritesJobs";
import CustomFooter from "./CustomFooter";
import { AppContext } from "../utils/AppContext";

export default function FavoriteJobs() {
    const { favoriteJobsList } = useContext(AppContext);

    let messageToRender;

    if (favoriteJobsList.length === 0) {
        messageToRender =
            "Oops! It seems like you don't have favorites jobs yet";
    } else {
        messageToRender =
            "These are your favorites jobs. Hurry up and apply today!";
    }

    return (
        <Box>
            <CustomAppBar />
            <Container maxWidth="sm" sx={{ px: 5, mt: 5 }}>
                <Typography variant="h4" color="initial" align="center">
                    {messageToRender}
                </Typography>
            </Container>
            <ListFavoritesJobs />
            <CustomFooter isFavoriteJobs />
        </Box>
    );
}
