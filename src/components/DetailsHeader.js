import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function DetailsHeader({ jobName, company, redirectJobUrl }) {
    return (
        <Box sx={{ mt: 12, px: { xs: 2, sm: 5 } }}>
            <Typography variant="h4" color="initial" align="center">
                Howdy, stranger :) The job details are shown below
            </Typography>
            <Card
                variant="outlined"
                sx={{ mt: 6, p: 3, display: { xs: "block", md: "block" } }}
            >
                <CardContent>
                    <Typography variant="h6">{jobName}</Typography>
                    <Typography
                        paragraph
                        color="text.secondary"
                        style={{ fontSize: "1.15rem" }}
                        sx={{ mt: 1 }}
                    >
                        {company}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 1 }}
                        href={redirectJobUrl}
                        target="_blank"
                        rel="noopener"
                    >
                        Apply now
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

DetailsHeader.propTypes = {
    jobName: PropTypes.string,
    company: PropTypes.string,
    redirectJobUrl: PropTypes.string,
};

DetailsHeader.defaultProps = {
    jobName: "Not found",
    company: "Not found",
    redirectJobUrl: "#",
};

export default DetailsHeader;
