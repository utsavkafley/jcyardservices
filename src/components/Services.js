import React from 'react';

const Services = () => {
    const services = ["Service 1", "Service 2", /* ...more services... */ "Service 12"];
    return (
        <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map(service => (
                    <div key={service} className="flex-1 min-w-[45%] bg-white p-2 rounded-lg shadow-md">
                        {service}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
