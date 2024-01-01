import React from 'react';
import { services } from './services-list';
const Services = () => {
    
    return (
        <section id="services" className="px-4 sm:px-24 md:px-32 lg:px-72">
            <h2 className="text-xl font-complementary mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <div key={service.title} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-complementary font-bold">{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
