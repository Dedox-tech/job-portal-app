import {
    Box,
    Card,
    CardContent,
    List,
    ListItem,
    Typography,
    ListItemText,
} from "@mui/material";
import React from "react";
import CustomFooter from "./CustomFooter";

export default function DetailsContent() {
    const textStyles = {
        whiteSpace: "pre-line",
        fontSize: "1.15rem",
        lineHeight: "1.75",
    };

    const jobDescription =
        "Flyhomes is a place where authenticity, equity, and innovation collide to build the world’s best homebuying experience. Innovation is in our DNA. What will you create here?\n\nWe offer brokerage, mortgage and closing services—all under one roof—to ensure our clients have an amazing experience from the moment they start to work with us, to the moment they move in, and beyond. \n\nReal estate, mortgage and technology are what we do, but people are at the core of our mission. That’s where you come in! Whether you're our employee or our client, we believe it’s about people, not properties. From client-facing roles to technology, and everywhere in between, you’ll work alongside a diverse team who loves to solve problems, think creatively, and fly the plane as we continue to build it. If you’re dedicated to creating an inclusive, equitable, and more enjoyable real estate experience with solutions for every homebuyer, then we want to talk to you!\n\nThis position is remote and may be performed anywhere in the US, with the exception of the state of Colorado.\n\nThe Role\n\n\nPassion for the real world problems that home buyers and sellers are facing. You’ll bring your strong drive to understand their intrinsic motivations in order to craft solutions that make the home buying and home selling experience radically better\nWork with our Product Design and PM team to understand consumer product requirements, use cases, and user journeys in partnership with our greater Engineering org\nUse both qualitative and quantitative insights and research to inform your design decisions. Excellent data analysis skills leveraging different qualitative and quantitative methodologies \nAbility to work collaboratively and actively advocate for customer and stakeholder needs\nHelp understand and gather feedback from your peers, cross-functional partners, and our customers\nStrong ability to advocate for your designs and to tell a story about your decision making. Bring your strong and informed point of view \nApply insights to help inform product decisions and help the team establish our “north star”\nWest Coast preferred (Seattle or Los Angeles); however, location is absolutely flexible \n\nDesired Skills & Experience\n\n\nA portfolio with mobile native and/or web responsive projects that highlights your approach to problem solving, as well as the solutions themselves\n5+ years industry experience as a product designer with proven impact\nPassion for leveraging qualitative research to identify and solve user problems\nCollaboration and Teamwork: Experience partnering with Product, Engineering, and Research to impact our broader product strategy\nStrong interest in service design a plus and a desire to “zoom out” to understand the big picture\n\nWhat We Offer\n\n\nCompetitive compensation with a salary, bonuses, and stock grants\nGenerous benefits, including unlimited PTO, medical, dental, and vision insurance, paid family leave, commuter benefits, 401(K) matching, home buying & selling benefits, and more\nA supportive product design team where you can learn and share your knowledge openly. Curious to see who you would be working with? Connect with Shawn Barraza, our Product Design Team Manager and see how she would be invested in your growth\nNote that all teams are currently working remotely due to COVID-19\n\nFlyhomes is an equal opportunity employer committed to hiring a diverse workforce. To ensure that our products and culture continue to incorporate everyone's perspectives and experience we never discriminate on the basis of regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status.\n\nFlyhomes Perks\n\nReinventing an industry takes work and we aim to recognize and champion the well being of our people professionally, financially, physically and mentally.\n\n\nGenerous PTO\n401K Matching\nHealth, Dental, Vision\nHome Buying & Selling Benefits\nCommuter Benefits\nCasual Dress\nProfessional Development Benefits\nPaid Volunteer Time\nDog friendly HQ!\n";
    const jobRequirements =
        "Experience shipping B to C designs\n5 years of experience on the job as a product designer, especially mobile products\nA portfolio with mobile native and/or web responsive projects that highlights your approach to problem solving, as well as the solutions themselves\nPassion for leveraging qualitative research to identify and solve user problems";
    const jobResponsabilities =
        "Passion for the real world problems that home buyers and sellers are facing. You’ll bring your strong drive to understand their intrinsic motivations in order to craft solutions that make the home buying and home selling experience radically better\nWork with our Product Design and PM team to understand consumer product requirements, use cases, and user journeys in partnership with our greater Engineering org \nUse both qualitative and quantitative insights and research to inform your design decisions. Excellent data analysis skills leveraging different qualitative and quantitative methodologies \nAbility to work collaboratively and actively advocate for customer and stakeholder needs\nHelp understand and gather feedback from your peers, cross-functional partners, and our customers\nStrong ability to advocate for your designs and to tell a story about your decision making. Bring your strong and informed point of view\nApply insights to help inform product decisions and help the team establish our “north star”\n";

    const jobSkills = ["C", "Mobile", "Web", "GUI Programming", "UX UI Design"];

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
        <Box sx={{ mt: 5, mb: 10, px: { xs: 2, sm: 5 } }}>
            <Card variant="outlined" sx={{ p: { xs: 1, sm: 2 } }}>
                <CardContent>
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
                        {jobResponsabilities}
                    </Typography>
                    <Typography variant="h6" color="initial" sx={{ mt: 5 }}>
                        Skills
                    </Typography>
                    <List sx={{ mt: 2 }}>{jobSkillsForRender}</List>
                    <CustomFooter isJobDetails />
                </CardContent>
            </Card>
        </Box>
    );
}
