import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { services } from "./services-list";

export const Services = () => {
  return (
    <section
      id="services"
      className="px-4 py-8 sm:px-24 md:px-32 lg:px-72 bg-slate-400"
    >
      <Typography variant="h3" gutterBottom className="pb-4">
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={4} className="border-e-2">
            <Typography variant="h5">{service.title}</Typography>
            <Typography variant="h7">{service.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Services;
