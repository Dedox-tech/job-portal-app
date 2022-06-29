import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Stack,
} from "@mui/material";
import React from "react";
import CustomAvatar from "boring-avatars";

export default function DetailsHeader() {
    return (
        <Box sx={{ mt: 5, px: { xs: 2, sm: 5 } }}>
            <Typography variant="h4" color="initial" align="center">
                Howdy, stranger :) The job details are shown below
            </Typography>
            {/* Card for desktop viewers */}
            <Card
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
                            name="Flyhomes.com"
                            variant="marble"
                            colors={["#CAE5FF"]}
                        />
                        <Stack direction="column">
                            <Typography variant="h6">
                                Senior Product Designer, Mobile
                            </Typography>
                            <Typography
                                paragraph
                                color="text.secondary"
                                style={{ fontSize: "1.15rem" }}
                            >
                                Flyhomes.com
                            </Typography>
                        </Stack>
                        <Button variant="contained" color="primary">
                            Apply now
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
            {/* Card for mobile viewers */}
            <Card
                variant="outlined"
                sx={{ mt: 6, p: 4, display: { xs: "block", md: "none" } }}
            >
                <Typography variant="h6">
                    Senior Product Designer, Mobile
                </Typography>
                <Typography
                    paragraph
                    color="text.secondary"
                    style={{ fontSize: "1.15rem" }}
                    sx={{ mt: 1 }}
                >
                    Flyhomes.com
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Apply now
                </Button>
            </Card>
        </Box>
    );
}
