import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='w-full bg-grayish-dark-blue'>
            <div className='max-w-6xl mx-auto md:h-20 py-8 md:py-0 px-8 md:px-10'>
                <div className='h-full flex md:flex-row flex-col items-center md:justify-between gap-10 md:gap-0'>
                    <div className='flex md:flex-row flex-col items-center gap-8 md:gap-12 text-very-light-gray'>
                        <Link to="/">
                            <img src='/images/logo-white.svg' alt='Logo Brand' className='mb-2 md:mb-0'/>
                        </Link>
                        <ul className="flex md:flex-row flex-col items-center gap-8 md:gap-10 body-2">
                            <li className='hover:text-slightly-desaturated-cyan'>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className='hover:text-slightly-desaturated-cyan'>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/portfolio">
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li className='hover:text-slightly-desaturated-cyan'>
                                <Link onClick={() => window.scrollTo(0, 0)} to="/contact-me">
                                    CONTACT ME
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-row gap-4 items-center mt-2 md:mt-0'>
                        <a href='https://github.com/your-username'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='hover:opacity-70 transition-opacity'>
                            <img src='/images/icons/github-white.svg' alt='Github Icon'/>
                        </a>
                        <a href='https://twitter.com/your-username'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='hover:opacity-70 transition-opacity'>
                            <img src='/images/icons/twitter-white.svg' alt='Twitter Icon'/>
                        </a>
                        <a href='https://www.linkedin.com/in/your-username/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='hover:opacity-70 transition-opacity'>
                            <img src='/images/icons/linkedin-white.svg' alt='Linkedin Icon'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;