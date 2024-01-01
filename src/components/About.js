import React from 'react';
import about from '../images/about.jpg';

const About = () => {
    return (
        <section className="p-4 sm:px-24 md:px-32 lg:px-72">
            <h2 className="text-xl font-complementary mb-2 lg:mb-0">About Us</h2>
            <div className="flex flex-col space-y-4 lg:flex-row lg:items-center">
                <p className='md:text-lg'>Welcome to JCYardServices, a family-owned business specializing in hunting property maintenance,
                     lawn care, and food plot management. With a passion for the outdoors and a commitment to eco-friendly
                      practices, we offer a range of services tailored to enhance and sustain your outdoor spaces.
                </p>
                <img src={about} alt="About JC Yard Services" className="md:mr-4 md:w-72" />
            </div>

        </section>
    );
};

export default About;