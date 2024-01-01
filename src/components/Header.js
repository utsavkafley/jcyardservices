import React from 'react';
import logo from '../images/logo.png';
const Header = () => {
    return (
        <header className="px-4 sm:px-24 md:px-32 lg:px-72 w-full bg-orange text-white p-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-16 mr-2" />
                    <h1 className="text-xl md:text-3xl font-complementary">JC Yard Services</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
