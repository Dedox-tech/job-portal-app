/* eslint-disable no-console */
import {
    Box,
    Grid,
    Typography,
    Container,
    TextField,
    Button,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function InputSearch() {
    const [techKeywords, setTechKeywords] = useState("");
    const [experience, setExperience] = useState("");
    const [companyType, setCompanyType] = useState("");
    const [hours, setHours] = useState("");

    const handleChangeTechKeywords = (event) => {
        setTechKeywords(event.target.value);
    };

    const handleChangeExperience = (event) => {
        setExperience(event.target.value);
    };

    const handleCompanyType = (event) => {
        setCompanyType(event.target.value);
    };

    const handleHours = (event) => {
        setHours(event.target.value);
    };

    useEffect(() => {
        console.log("Tech keyword:", techKeywords);
        console.log("Experience:", experience);
        console.log("Company type:", companyType);
        console.log("Hours:", hours);
    });

    return (
        <Box sx={{ mt: 12 }}>
            <Container maxWidth="sm" sx={{ px: 5 }}>
                <Typography variant="h4" color="initial" align="center">
                    Hey! What are you looking for today?
                </Typography>
                <Typography
                    variant="h6"
                    color="text.primary"
                    align="left"
                    sx={{ mt: 4, display: { md: "none" } }}
                >
                    Tech keywords
                </Typography>
                <TextField
                    id="Description"
                    variant="outlined"
                    label="E.g: Front-end, Back-end..."
                    sx={{ mt: 4 }}
                    fullWidth
                    value={techKeywords}
                    onChange={handleChangeTechKeywords}
                />
                <Typography
                    variant="h6"
                    color="text.primary"
                    align="left"
                    sx={{ mt: 4, display: { md: "none" } }}
                >
                    Filters
                </Typography>
                <Grid container spacing={3} mt={0}>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="experience-for-jobs">
                                Experience
                            </InputLabel>
                            <Select
                                labelId="experience-for-jobs"
                                label="Experience"
                                value={experience}
                                onChange={handleChangeExperience}
                            >
                                <MenuItem value="Junior">Junior</MenuItem>
                                <MenuItem value="Regular">Regular</MenuItem>
                                <MenuItem value="Senior">Senior</MenuItem>
                                <MenuItem value="Lead">Lead</MenuItem>
                                <MenuItem value="All">All</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="company-type-for-jobs">
                                Company Type
                            </InputLabel>
                            <Select
                                labelId="company-type-for-jobs"
                                label="Company Type"
                                value={companyType}
                                onChange={handleCompanyType}
                            >
                                <MenuItem value="Startup">Startup</MenuItem>
                                <MenuItem value="Product">Product</MenuItem>
                                <MenuItem value="Services">Services</MenuItem>
                                <MenuItem value="All">All</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                            <InputLabel id="hours-for-jobs">Hours</InputLabel>
                            <Select
                                labelId="hours-for-jobs"
                                label="Hours"
                                value={hours}
                                onChange={handleHours}
                            >
                                <MenuItem value="Full-Time">Full-Time</MenuItem>
                                <MenuItem value="Part-Time">Part-Time</MenuItem>
                                <MenuItem value="Contractor">
                                    Contractor
                                </MenuItem>
                                <MenuItem value="All">All</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 4 }}
                >
                    Search
                </Button>
            </Container>
        </Box>
    );
}
