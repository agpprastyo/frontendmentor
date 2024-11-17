import {useState} from 'react';
import GradientButton from "./gradient-button.jsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {name: "Home", href: "#"},
        {name: "About", href: "#about"},
        {name: "Contact", href: "#contact"},
        {name: "Blog", href: "#blog"},
        {name: "Careers", href: "#careers"},
    ];

    return (
        <div className="z-50 sticky top-0 w-full lg:bg-white">
            <div
                className="bg-white mx-auto flex flex-row justify-between items-center container h-20 relative">
                <img src="/images/logo.svg" alt="logo" className="h-8 pl-4 lg:pl-0"/>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden mr-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <img
                            src={isOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
                            alt={isOpen ? "Close Icon" : "Hamburger Icon"}
                        />
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:block">
                    <ul className="flex flex-row space-x-6 h-full items-center">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative group h-full">
                                <div className="flex flex-col items-center h-full">
                                    <a
                                        href={item.href}
                                        className="text-gray-500 hover:text-gray-900 font-medium self-center h-full flex items-center"
                                    >
                                        {item.name}
                                    </a>
                                    <div
                                        className="text-red-400 h-1 w-full bg-gradient-to-r from-primary-limeGreen to-primary-brightCyan absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
                <GradientButton className="hidden sm:block" text="Request Invite"/>
            </div>

            {/* Mobile Menu - Fixed Position */}
            {isOpen && (
                <div
                    className="md:hidden fixed top-20 w-full  bg-gradient-to-b from-gray-900/50 to-gray-900/90 min-h-screen ">
                    <div className="bg-white mx-3 mt-4 rounded-lg shadow-lg">
                        <ul className="flex flex-col items-center space-y-4 py-6">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-gray-500 hover:text-gray-900 font-medium"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;