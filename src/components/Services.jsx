import React from "react";
import { services } from "./services-list";
export const Services = () => {
  return (
    <section id="services" className="bg-orange text-slate-100">
      <h3>Our Services</h3>
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
