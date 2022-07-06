import {
    Box,
    // Card,
    // CardContent,
    List,
    ListItem,
    Typography,
    ListItemText,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import CustomFooter from "./CustomFooter";

function DetailsContent({
    jobDescription,
    jobRequirements,
    jobResponsibilities,
    jobSkills,
}) {
    const textStyles = {
        whiteSpace: "pre-line",
        fontSize: "1.15rem",
        lineHeight: "1.75",
    };

    const jobSkillsForRender = jobSkills.map((element) => (
        <ListItem key={jobSkills.indexOf(element).toString()}>
            <ListItemText
                primary={element}
                primaryTypographyProps={{
                    color: "text.secondary",
                    fontSize: "1.15rem",
                    lineHeight: "1.25",
                }}
            />
        </ListItem>
    ));

    return (
        <Box sx={{ mt: 6, mb: 10, px: { xs: 3, sm: 6 } }}>
            <Typography variant="h6" color="initial">
                Job description
            </Typography>
            <Typography
                paragraph
                style={textStyles}
                color="text.secondary"
                sx={{ mt: 5 }}
            >
                {jobDescription}
            </Typography>
            <Typography variant="h6" color="initial" sx={{ mt: 5 }}>
                Requirements
            </Typography>
            <Typography
                paragraph
                style={textStyles}
                color="text.secondary"
                sx={{ mt: 5 }}
            >
                {jobRequirements}
            </Typography>
            <Typography variant="h6" color="initial" sx={{ mt: 5 }}>
                Responsibilities
            </Typography>
            <Typography
                paragraph
                style={textStyles}
                color="text.secondary"
                sx={{ mt: 5 }}
            >
                {jobResponsibilities}
            </Typography>
            <Typography variant="h6" color="initial" sx={{ mt: 5 }}>
                Skills
            </Typography>
            <List sx={{ mt: 2 }}>{jobSkillsForRender}</List>
            <CustomFooter isJobDetails />
        </Box>
    );
}

DetailsContent.propTypes = {
    jobDescription: PropTypes.string,
    jobRequirements: PropTypes.string,
    jobResponsibilities: PropTypes.string,
    jobSkills: PropTypes.arrayOf(PropTypes.string),
};

DetailsContent.defaultProps = {
    jobDescription: "Not found",
    jobRequirements: "Not found",
    jobResponsibilities: "Not found",
    jobSkills: ["Not found"],
};

export default DetailsContent;
