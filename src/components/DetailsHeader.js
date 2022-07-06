import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    // Stack,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
// import CustomAvatar from "boring-avatars";

function DetailsHeader({ jobName, company }) {
    return (
        <Box sx={{ mt: 12, px: { xs: 2, sm: 5 } }}>
            <Typography variant="h4" color="initial" align="center">
                Howdy, stranger :) The job details are shown below
            </Typography>
            {/* Card for desktop viewers */}
            {/* <Card
                variant="outlined"
                sx={{ mt: 6, p: 2, display: { xs: "none", md: "block" } }}
            >
                <CardContent>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <CustomAvatar
                            size={121}
                            name={company}
                            variant="marble"
                            colors={["#CAE5FF"]}
                        />
                        <Stack direction="column">
                            <Typography variant="h6">{jobName}</Typography>
                            {<Typography
                                paragraph
                                color="text.secondary"
                                style={{ fontSize: "1.15rem" }}
                            >
                                {company}
                            </Typography>
                        </Stack>
                        <Button variant="contained" color="primary">
                            Apply now
                        </Button>
                    </Stack>
                </CardContent>
            </Card> */}
            {/* Card for mobile viewers */}
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
                    <Button variant="contained" color="primary" sx={{ mt: 1 }}>
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
};

DetailsHeader.defaultProps = {
    jobName: "Not found",
    company: "Not found",
};

export default DetailsHeader;
