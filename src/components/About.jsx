import React from "react";
import about from "../images/about.png";

const About = () => {
  return (
    <section class="about">
      <h3>About Us</h3>
      <div class="about-content">
        <div class="about-text">
          <p>
            Welcome to JC Yard Services, a family-owned business specializing in
            hunting property maintenance, lawn care, and food plot management.
          </p>
          <br />
          <div class="about-img-mobile">
            <img src={about} alt="About JC Yard Services" />
            <br />
          </div>
          <p>
            At JC Yard Services, we understand the unique needs of hunting
            properties and the importance of creating an environment that
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
