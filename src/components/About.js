import React from 'react';

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center p-4">
            <img src="/path-to-image.jpg" alt="About JC Yard Services" className="w-2/5 md:w-2/5 mr-4" />
            <div className="w-3/5 md:w-3/5">
                <h2 className="text-xl font-semibold mb-2">About JC Yard Services</h2>
                <p>Here goes your blurb of text about JC Yard Services...</p>
            </div>
        </section>
    );
};

export default About;
