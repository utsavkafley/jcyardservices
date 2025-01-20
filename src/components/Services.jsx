import React from "react";
import { services } from "./services-list";
import { Typography } from "@mui/material";
export const Services = () => {
  return (
    <section className="bg-orange text-slate-100">
      <Typography variant="h3" gutterBottom>
        Our Services
      </Typography>
      <div class="services">
        {services.map((service) => (
          <div>
            <p class="service-title">{service.title}</p>
            <p class="service-description">
              {service.description}
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
