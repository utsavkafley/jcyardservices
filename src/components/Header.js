import React from 'react';

const Header = () => {
    return (
        <header className="bg-orange text-white p-4 mb-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
                    <h1 className="text-xl font-bold">JC Yard Service</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
