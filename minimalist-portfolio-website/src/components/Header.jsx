import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Header = () => {
    const location = useLocation();
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleNavClick = () => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    };

    const navigationLinks = [
        {path: "/", label: "HOME"},
        {path: "/portfolio", label: "PORTFOLIO"},
        {path: "/contact-me", label: "CONTACT ME"}
    ];

    return (
        <>
            <div
                className={`w-full  mt-16 sticky top-0 z-20 transition-shadow duration-300 ${
                    scrolling ? 'shadow py-6 bg-very-light-gray' : ''
                }`}
            >
                <div
                    className='md:max-w-6xl w-full md:px-10 px-8 h-full mx-auto flex flex-row items-center justify-between'>
                    <Link to="/">
                        <img src='/images/logo.svg' alt='Logo Brand'/>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-4 items-center text-grayish-dark-blue gap-10 body-2">
                        {navigationLinks.map((link) => (
                            <li
                                key={link.path}
                                onClick={handleNavClick}
                                className={location.pathname === link.path ? 'text-slightly-desaturated-cyan' : ''}
                            >
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <img
                            src={isMenuOpen ? '/images/icons/close.svg' : '/images/icons/hamburger.svg'}
                            alt={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className="w-6 h-6"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Popup */}
            <div
                className={`fixed inset-0  z-10 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`absolute right-8 top-32 w-[223px] bg-[#32323d] transform transition-transform duration-300 ${
                        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <nav className="py-10">
                        {navigationLinks.map((link, index) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={handleNavClick}
                                className={`block text-center text-white text-xs uppercase tracking-widest py-6 hover:text-slightly-desaturated-cyan transition-colors ${
                                    location.pathname === link.path ? 'text-slightly-desaturated-cyan' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;