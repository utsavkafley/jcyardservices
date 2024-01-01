import React from 'react';

const Services = () => {
    const services = [
        { title: "Wildlife Habitat Management", description: "Specialized service focusing on creating and maintaining natural habitats for wildlife." },
        { title: "Custom Food Plot Installation", description: "Design and installation of food plots to promote healthy wildlife growth." },
        { title: "Seasonal Lawn Care", description: "Year-round lawn maintenance, including mowing, fertilization, and weed control." },
        { title: "Tree Stand and Blind Setup", description: "Installation of tree stands and hunting blinds at strategic locations." },
        { title: "Trail and Path Clearing", description: "Clearing and maintenance of trails for easy access across your property." },
        { title: "Pond and Water Feature Maintenance", description: "Management of ponds and water features to support wildlife." },
        { title: "Invasive Species Control", description: "Removal of invasive species to protect the native ecosystem." },
        { title: "Wildlife Population Monitoring", description: "Tracking the health and numbers of game species." },
        { title: "Fence and Boundary Maintenance", description: "Upkeep of fencing and property boundaries for security." },
        { title: "Seasonal Brush Control", description: "Removal of overgrowth and brush to maintain clear land areas." },
        { title: "Hunting Land Consulting", description: "Professional advice on land use and sustainable hunting practices." },
        { title: "Custom Landscaping for Wildlife", description: "Landscaping to enhance property aesthetics and support wildlife." }
    ];

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
