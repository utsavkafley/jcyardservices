import React from 'react';

const ContactForm = () => {
    const services = ["Lawn Mowing", "Hedge Trimming", "Garden Maintenance", /* ...other services... */, "Other"];

    return (
        <section className="p-4">
            <form className="flex flex-col space-y-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <input type="text" placeholder="Firstname" className="flex-1 p-2 border border-gray-300 rounded" />
                    <input type="text" placeholder="Lastname" className="flex-1 p-2 border border-gray-300 rounded" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                <input type="tel" placeholder="Phone" className="w-full p-2 border border-gray-300 rounded" />
                <select className="p-2 border border-gray-300 rounded">
                    {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                    ))}
                </select>
                <textarea placeholder="Description" className="p-2 border border-gray-300 rounded"></textarea>
                <div className="flex justify-between items-center">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
                    <button type="reset" className="p-2">🔄 Reset</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
