import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { Link } from "react-router-dom";

export default function CustomAppBar() {
    return (
        <AppBar
            position="static"
            variant="outlined"
            elevation={0}
            color="transparent"
        >
            <Toolbar>
                <IconButton
                    aria-label="Home"
                    size="small"
                    edge="start"
                    component={Link}
                    to="/general-jobs"
                >
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{ flexGrow: 1 }}
                    fontWeight="regular"
                >
                    IT Jobs
                </Typography>
                <IconButton
                    aria-label="Home"
                    size="small"
                    edge="end"
                    component={Link}
                    to="/general-jobs"
                >
                    <DashboardOutlinedIcon />
                </IconButton>
                <IconButton
                    aria-label="Favorites"
                    size="small"
                    edge="end"
                    component={Link}
                    to="/favorite-jobs"
                >
                    <FavoriteBorderIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
