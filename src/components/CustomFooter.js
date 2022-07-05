import { Button, Container, Box } from "@mui/material";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import FooterTrademark from "./FooterTrademark";
import { AppContext } from "../utils/AppContext";

function CustomFooter({ isGeneralJobs, isFavoriteJobs, isJobDetails }) {
    const { setNumberOfPost } = useContext(AppContext);

    if (isGeneralJobs) {
        return (
            <Container maxWidth="sm" align="center" sx={{ mb: 6 }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 8 }}
                    onClick={() => {
                        setNumberOfPost((previousValue) => previousValue + 24);
                    }}
                >
                    Load more
                </Button>
                <Box sx={{ mt: 3 }}>
                    <FooterTrademark />
                </Box>
            </Container>
        );
    }

    if (isFavoriteJobs) {
        return (
            <Container maxWidth="sm" align="center" sx={{ mt: 7, mb: 7 }}>
                <FooterTrademark />
            </Container>
        );
    }

    if (isJobDetails) {
        return (
            <Box align="center" sx={{ mt: 5 }}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mb: 3 }}
                >
                    Apply now
                </Button>
                <FooterTrademark areCustomStylesRequired />
            </Box>
        );
    }
}

CustomFooter.defaultProps = {
    isGeneralJobs: false,
    isFavoriteJobs: false,
    isJobDetails: false,
};

CustomFooter.propTypes = {
    isGeneralJobs: PropTypes.bool,
    isFavoriteJobs: PropTypes.bool,
    isJobDetails: PropTypes.bool,
};

export default CustomFooter;
