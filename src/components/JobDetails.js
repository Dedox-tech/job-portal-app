/* eslint-disable no-console */
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import CustomAppBar from "./CustomAppBar";
import DetailsHeader from "./DetailsHeader";
import DetailsContent from "./DetailsContent";

export default function JobDetails() {
    const { jobUrl } = useParams();
    const { data, error } = useFetchData();

    if (error) {
        return (
            <Box>
                <CustomAppBar />
                <Container maxWidth="custom">
                    <Typography> Error </Typography>
                </Container>
            </Box>
        );
    }

    if (data) {
        const [jobToRender] = data.filter(
            (element) => element.jobUrl === jobUrl
        );
        return (
            <Box>
                <CustomAppBar />
                <Container maxWidth="custom">
                    <DetailsHeader
                        jobName={jobToRender.name}
                        company={jobToRender.company}
                    />
                    <DetailsContent
                        jobDescription={jobToRender.description}
                        jobRequirements={jobToRender.requirementsMustTextArea}
                        jobResponsibilities={
                            jobToRender.responsibilitiesTextArea
                        }
                        jobSkills={jobToRender.technologies}
                    />
                </Container>
            </Box>
        );
    }
}
