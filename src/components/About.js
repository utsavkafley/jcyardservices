import React from 'react';
import about from '../images/about.jpg';

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center py-4">
            <img src={about} alt="About JC Yard Services" className="w-2/5 md:w-2/5 mr-4" />
            <div className="w-3/5 md:w-3/5">
                <h2 className="text-xl font-semibold mb-2">About JC Yard Services</h2>
                <p>Welcome to JCYardServices, a family-owned business specializing in hunting property maintenance, lawn care, and food plot management. With a passion for the outdoors and a commitment to eco-friendly practices, we offer a range of services tailored to enhance and sustain your outdoor spaces. From creating wildlife habitats to meticulous lawn upkeep, our team combines expertise and care to transform your land into a thriving, sustainable, and picturesque environment. Trust us to bring your outdoor dreams to life, with a focus on quality, sustainability, and customer satisfaction.</p>
            </div>
        </section>
    );
};

export default About;
