import { Box } from "@mui/material";
import React from "react";
import CustomAppBar from "./CustomAppBar";
import InputSearch from "./InputSearch";
import ListGeneralJobs from "./ListGeneralJobs";
import CustomFooter from "./CustomFooter";

export default function GeneralJobs() {
    return (
        <Box>
            <CustomAppBar />
            <InputSearch />
            <ListGeneralJobs />
            <CustomFooter isGeneralJobs />
        </Box>
    );
}
