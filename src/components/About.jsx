import React from "react";
import about from "../images/about.png";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <section class="about">
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <div class="about-content">
        <div class="about-text">
          <p>
            Welcome to JCYardServices, a family-owned business specializing in
            hunting property maintenance, lawn care, and food plot management.
          </p>
          <br />

          <p>
            At JCYardServices, we understand the unique needs of hunting
            properties and the importance of creating an environment thata
            promotes wildlife health and habitat sustainability.
          </p>
        </div>

        <div class="about-img">
          <img src={about} alt="About JC Yard Services" />
        </div>
      </div>
    </section>
  );
};

export default About;
