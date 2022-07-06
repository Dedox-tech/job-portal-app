import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CustomErrorMessage({ errorMessage }) {
    return (
        <Box>
            <Typography paragraph>
                Oops! An error has ocurred fetching the data
            </Typography>
            <Typography paragraph>Error message: {errorMessage}</Typography>
        </Box>
    );
}

CustomErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired,
};

export default CustomErrorMessage;
