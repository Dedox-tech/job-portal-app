import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function FooterTrademark({ areCustomStylesRequired }) {
    if (areCustomStylesRequired) {
        return (
            <Typography
                paragraph
                align="center"
                color="text.secondary"
                style={{
                    fontSize: "1.05rem",
                    lineHeight: "1.25",
                }}
            >
                © Copyright 2022 IT Jobs App
            </Typography>
        );
    }
    return (
        <Typography paragraph align="center">
            © Copyright 2022 IT Jobs App
        </Typography>
    );
}

FooterTrademark.defaultProps = {
    areCustomStylesRequired: false,
};

FooterTrademark.propTypes = {
    areCustomStylesRequired: PropTypes.bool,
};

export default FooterTrademark;
