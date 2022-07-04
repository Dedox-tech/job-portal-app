/* eslint-disable no-console */
import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    CardActions,
    Stack,
    IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import CustomAvatar from "boring-avatars";
import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../utils/AppContext";

function JobCard({ company, jobName, location, hours, date, id }) {
    const { favoriteJobsList, setFavoriteJobsList } = useContext(AppContext);

    const handleClickFavorite = () => {
        if (favoriteJobsList.includes(id)) {
            setFavoriteJobsList((previousValues) =>
                previousValues.filter((element) => element !== id)
            );
        } else {
            setFavoriteJobsList((previousValues) => [...previousValues, id]);
        }
    };

    useEffect(() => {
        console.log(favoriteJobsList);
    }, [favoriteJobsList]);

    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <CustomAvatar
                        size={80}
                        name={company}
                        variant="marble"
                        colors={["#CAE5FF"]}
                    />
                }
            />
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Typography paragraph>{date}</Typography>
                    <Typography paragraph>{hours}</Typography>
                </Stack>
                <Typography variant="h6">{jobName}</Typography>
                <Typography paragraph color="text.secondary">
                    {company}
                </Typography>
                <Typography paragraph color="primary">
                    {location}
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "flex-end" }}
            >
                <IconButton
                    aria-label="Add to favorite"
                    onClick={handleClickFavorite}
                >
                    {favoriteJobsList.includes(id) ? (
                        <FavoriteIcon color="primary" />
                    ) : (
                        <FavoriteBorderIcon color="initial" />
                    )}
                </IconButton>
                <IconButton aria-label="Read more about the job">
                    <ReadMoreIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

JobCard.propTypes = {
    company: PropTypes.string,
    jobName: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string.isRequired,
};

JobCard.defaultProps = {
    company: "No registra",
    jobName: "No registra",
    location: "No registra",
    hours: "No registra",
    date: "No registra",
};

export default JobCard;
