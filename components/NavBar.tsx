import React from 'react';

export const NavBar = () => {

    return (
        <nav className="flex py-6 mb-8 bg-gradient-to-r from-gray-500 to-gray-700">
            <h2 className="text-yellow-400 text-2xl ml-10 flex-grow">
                Deo Volente
            </h2>
            <ul className="flex items-center space-x-6 mr-10">
                <li className="text-yellow-400 font-medium rounded-xl py-1 hover:text-black hover:bg-yellow-400">
                    <a className="p-5" href="/" >Home</a>
                </li>
                <li className="text-yellow-400 font-medium rounded-xl py-1 hover:text-black hover:bg-yellow-400">
                    <a className="p-5" href="/about">About</a>
                </li>
                <li className="text-yellow-400 font-medium rounded-xl py-1 hover:text-black hover:bg-yellow-400">
                    <a className="p-5" href="/contact-us">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;