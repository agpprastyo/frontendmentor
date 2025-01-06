import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";
import {PortfolioItems} from "../data/PortfolioItem.js";
import ContactMeSection from "../components/ContactMeSection.jsx";

const Portfolio = () => {
    return (
        <div className='min-h-screen flex flex-col bg-very-light-gray'>
            <div className='flex-grow'>
                <div className='lg:max-w-6xl w-full px-8 md:px-10 mt-14 mx-auto flex flex-col gap-20'>
                    {PortfolioItems.map((item, index) => (
                        <div key={index}
                             className={`flex flex-col ${
                                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                             } lg:gap-32 md:gap-16 gap-8 items-center`}>
                            <picture className='w-full md:w-auto'>
                                <source media="(min-width: 1024px)" srcSet={item.imgPathDesktop}/>
                                <source media="(min-width: 768px)" srcSet={item.imagePathTablet}/>
                                <img
                                    src={item.imagePathMobile}
                                    alt={`${item.title} Image`}
                                    className='w-full h-auto'
                                />
                            </picture>
                            <div className='flex flex-col w-full md:max-w-80 h-full items-center'>
                                <hr className="h-px bg-grayish-dark-blue w-full"/>
                                <div className='w-full'>
                                    <h1 className='heading-2 text-grayish-dark-blue mt-12 text-center md:text-left'>
                                        {item.title}
                                    </h1>
                                    <p className='body-1 text-grayish-dark-blue mt-8 mb-6 text-center md:text-left'>
                                        {item.subtitle}
                                    </p>
                                    <div className='flex justify-center md:justify-start'>
                                        <Link to={`${item.link}`} onClick={() => window.scrollTo(0, 0)}>
                                            <button
                                                className='body-2 text-grayish-dark-blue border border-grayish-dark-blue mb-12 hover:bg-grayish-dark-blue hover:text-white'>
                                                <p className='mx-8 my-4 whitespace-nowrap'>GO TO PORTFOLIO</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="h-px bg-grayish-dark-blue w-full"/>
                            </div>
                        </div>
                    ))}

                    <ContactMeSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Portfolio;