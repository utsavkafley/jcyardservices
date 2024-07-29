import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const About = () => {
  return (
    <section className="p-4 sm:px-24 md:px-32 lg:px-72">
      <Typography variant="h3" gutterBottom>
        About us
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Typography variant="h6" gutterBottom>
            Welcome to JCYardServices, a family-owned business specializing in
            hunting property maintenance, lawn care, and food plot management.
            With a passion for the outdoors and a commitment to eco-friendly
            practices, we offer a range of services tailored to enhance and
            sustain your outdoor spaces.
          </Typography>
          <Typography variant="h6" gutterBottom>
            At JCYardServices, we understand the unique needs of hunting
            properties and the importance of creating an environment that
            promotes wildlife health and habitat sustainability.
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <img
            src="https://picsum.photos/id/99/500/320"
            alt="About JC Yard Services"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
