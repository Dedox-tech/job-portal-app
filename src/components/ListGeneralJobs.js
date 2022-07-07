/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useContext, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import JobCard from "./JobCard";
import useFetchData from "../utils/useFetchData";
import dateToString from "../utils/dateToString";
import { AppContext } from "../utils/AppContext";
import CustomErrorMessage from "./CustomErrorMessage";

export default function ListGeneralJobs() {
    const { numberOfPost } = useContext(AppContext);
    const { data, error } = useFetchData();

    let elementToRender;

    if (error) {
        elementToRender = <CustomErrorMessage errorMessage={error.message} />;
    }

    if (data) {
        const dataUpToDate = data.filter(
            (element) => element.isDisabledOrOutdated === false
        );
        elementToRender = dataUpToDate.slice(0, numberOfPost).map((element) => (
            <Grid item xs={12} sm={9} md={5} lg={4} key={element._id}>
                <JobCard
                    id={element._id}
                    company={element.company}
                    jobName={element.name}
                    location={
                        element.stateCategory.charAt(0).toUpperCase() +
                        element.stateCategory.slice(1)
                    }
                    hours={element.jobType}
                    date={dateToString(element.activeFrom)}
                    jobUrl={element.jobUrl}
                />
            </Grid>
        ));
    }

    useEffect(() => {
        console.log("The data is: ", data);
    });

    return (
        <Box sx={{ mt: 8 }}>
            <Container maxWidth="lg" sx={{ px: 5 }}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                >
                    {elementToRender}
                </Grid>
            </Container>
        </Box>
    );
}
