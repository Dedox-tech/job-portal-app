/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { Box, Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import JobCard from "./JobCard";
import useFetchData from "../utils/useFetchData";
import { AppContext } from "../utils/AppContext";
import dateToString from "../utils/dateToString";
import CustomErrorMessage from "./CustomErrorMessage";

export default function ListFavoritesJobs() {
    const { favoriteJobsList } = useContext(AppContext);
    const { data, error } = useFetchData();

    let elementToRender;

    if (error) {
        elementToRender = <CustomErrorMessage errorMessage={error.message} />;
    }

    if (data) {
        const realFavoriteJobsList = data.filter((element) =>
            favoriteJobsList.some((subElement) => subElement === element._id)
        );
        elementToRender = realFavoriteJobsList.map((element) => (
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
