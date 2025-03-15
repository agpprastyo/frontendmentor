import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {ThemeToggle} from "./ThemeToggle.tsx";


const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`bg-light-1 dark:bg-dark-1 z-10 ${hasShadow ? "shadow-md sticky z-20 top-0" : ""}`}>

        <div className='max-w-[1440px] mx-auto '>


            <header className={` lg:px-20 px-6 py-6  flex justify-between items-center text-text-1 dark:text-gray-100 transition-colors duration-200 `}>

                <Link to="/">
                    <h1 className="text-2xl font-bold cursor-pointer">Where in the world?</h1>
                </Link>
                <ThemeToggle />
            </header>
        </div>
        </div>
    );
};

export default Header;
