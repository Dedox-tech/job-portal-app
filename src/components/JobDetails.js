/* eslint-disable no-console */
import { Box, Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/useFetchData";
import CustomAppBar from "./CustomAppBar";
import DetailsHeader from "./DetailsHeader";
import DetailsContent from "./DetailsContent";
import CustomErrorMessage from "./CustomErrorMessage";

export default function JobDetails() {
    const { jobUrl } = useParams();
    const { data, error } = useFetchData();

    if (error) {
        return (
            <Box>
                <CustomAppBar />
                <Container maxWidth="custom">
                    <CustomErrorMessage errorMessage={error.message} />
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
                        redirectJobUrl={jobToRender.redirectJobUrl}
                    />
                    <DetailsContent
                        jobDescription={jobToRender.description}
                        jobRequirements={jobToRender.requirementsMustTextArea}
                        jobResponsibilities={
                            jobToRender.responsibilitiesTextArea
                        }
                        jobSkills={jobToRender.technologies}
                        redirectJobUrl={jobToRender.redirectJobUrl}
                    />
                </Container>
            </Box>
        );
    }
}
