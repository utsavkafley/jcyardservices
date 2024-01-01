import React from 'react';

const Navbar = () => {
    return (
        <nav className="p-4 sm:px-24 md:px-32 lg:px-72 flex flex-col sm:flex-row justify-between md:items-center bg-black text-white">
            <div className="flex flex-col sm:flex-row sm:gap-4">
                <a href="#home" className="hover:text-orange mb-2 sm:mb-0">Home</a>
                <a href="#services" className="hover:text-orange mb-2 sm:mb-0">Services</a>
                <a href="#gallery" className="hover:text-orange mb-2 sm:mb-0">Gallery</a>
                <a href="#contact" className="hover:text-orange">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;
