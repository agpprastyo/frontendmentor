import Footer from "../components/Footer.jsx";
import {PortfolioDetailsItem} from "../data/PortfolioDetailsItem.js";
import {Link, useParams} from "react-router-dom";
import ContactMeSection from "../components/ContactMeSection.jsx";

const Details = () => {
    const {slug} = useParams();
    const portfolioItemIndex = PortfolioDetailsItem.findIndex(item => item.slug === slug);

    if (portfolioItemIndex === -1) {
        return (
            <div className="flex flex-col h-screen overflow-hidden">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <h1 className="text-center text-grayish-dark-blue">Project not found</h1>
                    <Link to="/portfolio" className="mt-4">
                        <button className="h-12 px-6 body-2 text-white bg-grayish-dark-blue hover:bg-dark-blue rounded">
                            Back to Portfolio
                        </button>
                    </Link>
                </div>
                <Footer className=""/> {/* Footer will stay at the bottom due to flex layout */}
            </div>
        );
    }


    const portfolioItem = PortfolioDetailsItem[portfolioItemIndex];

    // Get previous and next item
    const previousItem = PortfolioDetailsItem[portfolioItemIndex - 1];
    const nextItem = PortfolioDetailsItem[portfolioItemIndex + 1];

    return (
        <div className='min-h-full flex flex-col bg-very-light-gray'>
            <div className='flex-grow'>
                <div className='lg:max-w-6xl w-full px-8 md:px-10 mt-14 mx-auto flex flex-col'>
                    <img src={portfolioItem.imgHero} alt='Hero Image' className='w-full'/>

                    <div className='flex lg:flex-row flex-col lg:gap-32 gap-12 mt-12 lg:mt-32 w-full'>
                        {/* Left Column */}
                        <div className='lg:min-w-96 flex flex-col gap-12'>
                            <hr className="h-px bg-grayish-dark-blue"/>
                            <div className='flex flex-col md:flex-row gap-8 md:gap-4'>
                                <div className='flex flex-col'>
                                    <h1 className='heading-2 mb-8'>{portfolioItem.title}</h1>
                                    <p className='body-1 text-grayish-dark-blue mb-6 md:hidden'>{portfolioItem.subtitle}</p>

                                    {/* Tags */}
                                    <div
                                        className='flex flex-wrap gap-2 text-slightly-desaturated-cyan lg:body-1 body-2 font-bold w-full mb-4'>
                                        {portfolioItem.tags.map((tag, index) => (
                                            <span key={index} className='tag-class'>
                                {tag}
                                                {index < portfolioItem.tags.length - 1 ? ' / ' : ''}
                            </span>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div
                                        className='flex flex-wrap gap-2 text-slightly-desaturated-cyan lg:body-1 body-2 font-bold'>
                                        {portfolioItem.stack.map((tech, index) => (
                                            <span key={index} className='tag-class'>
                                {tech}
                                                {index < portfolioItem.stack.length - 1 ? ' / ' : ''}
                            </span>
                                        ))}
                                    </div>

                                    {/* Visit Website Button */}
                                    <Link to='/contact-me' onClick={() => window.scrollTo(0, 0)}>
                                        <button
                                            className='h-12 mt-8 body-2 text-grayish-dark-blue border border-grayish-dark-blue hover:bg-grayish-dark-blue hover:text-white w-full md:w-auto'>
                                            <p className='mx-8 whitespace-nowrap'>VISIT WEBSITE</p>
                                        </button>
                                    </Link>
                                </div>

                                {/* Tablet Subtitle */}
                                <p className='body-1 text-grayish-dark-blue md:flex-1 hidden md:block lg:hidden'>
                                    {portfolioItem.subtitle}
                                </p>
                            </div>
                            <hr className="h-px bg-grayish-dark-blue"/>
                        </div>

                        {/* Right Column */}
                        <div className='flex flex-col'>
                            <h1 className='heading-3 mb-8'>Project Background</h1>
                            <p className='body-1 mb-10'>{portfolioItem.projectBg}</p>

                            <h1 className='heading-3 mb-8'>Static Previews</h1>
                            <div className='flex flex-col gap-8'>
                                {portfolioItem.previews.map((preview, index) => (
                                    <img
                                        key={index}
                                        src={preview.img}
                                        alt={preview.alt}
                                        className='w-full'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="w-full mx-auto mt-16">
                        <Navigation previousItem={previousItem} nextItem={nextItem}/>
                    </div>

                    {/* Contact Section */}
                    <ContactMeSection/>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Details;


const ProjectLink = ({item, direction}) => {
    if (!item) {
        return <div className="w-32"/>; // Placeholder for spacing
    }

    const isNext = direction === 'next';
    const arrowIcon = isNext ? '/images/icons/arrow-right.svg' : '/images/icons/arrow-left.svg';
    const label = isNext ? 'Next Project' : 'Previous Project';

    return (
        <Link to={`/portfolio/${item.slug}`} onClick={() => window.scrollTo(0, 0)}
              className="flex items-center md:space-x-10 space-x-4">
            {!isNext && (
                <img src={arrowIcon} alt={label} className="w-4 h-4"/>
            )}
            <div className={isNext ? 'text-right' : ''}>
                <h3 className="heading-3 text-grayish-dark-blue leading-9">
                    {item.title}
                </h3>
                <span className="body-1 text-grayish-dark-blue/50 leading-[30px]">
                    {label}
                </span>
            </div>
            {isNext && (
                <img src={arrowIcon} alt={label} className="w-4 h-4"/>
            )}
        </Link>
    );
};

const Navigation = ({previousItem, nextItem}) => (
    <div className="relative h-32">
        {/* Horizontal border lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-grayish-dark-blue/20"/>
        <div className="absolute inset-x-0 bottom-0 h-px bg-grayish-dark-blue/20"/>
        {/* Vertical divider */}
        <div className="absolute left-1/2 top-0.5 h-full w-px bg-grayish-dark-blue/20"/>
        {/* Navigation links container */}
        <div className="flex justify-between items-center h-full px-4">
            {/* Previous Project */}
            <ProjectLink item={previousItem} direction="previous"/>
            {/* Next Project */}
            <ProjectLink item={nextItem} direction="next"/>
        </div>
    </div>
);
