import React from 'react';
import {services} from './services-list';
const ContactForm = () => {
    console.log(services);
    return (
        <section id="contact" className="p-4 sm:px-24 md:px-32 lg:px-72">
            <h2 className="text-xl font-complementary mb-4">Contact Us</h2>
            <form className="flex flex-col space-y-4">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <input type="text" placeholder="Firstname" className="flex-1 p-2 border border-gray-300 rounded" />
                    <input type="text" placeholder="Lastname" className="flex-1 p-2 border border-gray-300 rounded" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                <input type="tel" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
                <select className="p-2 border border-gray-300 rounded">
                    {services.map((service, index) => (
                        <option key={index} value={service.title}>{service.title}</option>
                    ))}
                </select>
                <textarea placeholder="Description" className="p-2 border border-gray-300 rounded"></textarea>
                <div className="flex items-center">
                    <button type="submit" className="bg-blue text-white p-2 rounded hover:bg-blue-600">Send</button>
                    <button type="reset" className="bg-blue text-white p-2 ml-2 rounded hover:bg-blue-600">Reset Form</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
