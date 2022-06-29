import { Box, Container } from "@mui/material";
import React from "react";
import CustomAppBar from "./CustomAppBar";
import DetailsHeader from "./DetailsHeader";
import DetailsContent from "./DetailsContent";

export default function JobDetails() {
    return (
        <Box>
            <CustomAppBar />
            <Container maxWidth="custom">
                <DetailsHeader />
                <DetailsContent />
            </Container>
        </Box>
    );
}
