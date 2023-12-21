import React from "react";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>

        <Paper style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h4" gutterBottom>
            Welcome to MoviewBrief!
          </Typography>
          <Typography paragraph>
            At MoviewBrief, we are driven by a single goal: to enhance your
            movie-watching experience. Our application offers a seamless way to
            search and check movie details before you decide to watch them.
            Whether you're a film enthusiast or someone looking for the next
            movie to enjoy, MoviewBrief is your go-to resource.
          </Typography>
        </Paper>

        <Paper style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Ahmad</Typography>
              <Typography paragraph>
                The visionary behind MoviewBrief, Ahmad brings a wealth of
                knowledge in film analytics and application development. His
                passion for movies and tech innovation is the cornerstone of our
                app's development.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Nikita</Typography>
              <Typography paragraph>
                With a keen eye for user experience and design, Nikita ensures
                that MoviewBrief is not only functional but also visually
                appealing and easy to navigate.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6">Anna</Typography>
              <Typography paragraph>
                Our data guru, Anna, works tirelessly to ensure that the movie
                information on MoviewBrief is accurate, up-to-date, and
                comprehensive.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper style={{ padding: "20px", marginBottom: "20px" }}>
          <Typography variant="h5" gutterBottom>
            What We Offer
          </Typography>
          <Typography paragraph>
            MoviewBrief is more than just an application; it's a tool that
            transforms the way you choose movies. Our features include detailed
            movie insights, a user-friendly interface, and regular updates.
          </Typography>
        </Paper>

        <Paper style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            What is MoviewBrief?
          </Typography>
          <Typography paragraph>
            MoviewBrief is a unique application designed for movie lovers and
            casual viewers alike. Our platform allows you to search for movies
            and access detailed information about them before you watch.
          </Typography>
          <Typography paragraph>
            We believe in the power of movies to entertain, educate, and
            inspire. MoviewBrief is committed to enhancing your viewing
            experience by providing a comprehensive and user-friendly platform
            for all your movie-related queries. Join our growing community of
            movie lovers and start exploring the world of cinema like never
            before!
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
