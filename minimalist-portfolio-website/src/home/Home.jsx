import {Link} from "react-router-dom";
import ContactMeSection from "../components/ContactMeSection.jsx";
import Footer from "../components/Footer.jsx";

export const Home = () => {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-me');
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className='min-h-screen w-full flex flex-col bg-very-light-gray'>
            <div className='flex-grow'>
                <div className='md:max-w-6xl w-full  md:px-10 px-8 mt-14 md:mx-auto flex flex-col '>
                    {/*Hero Section*/}
                    <div className='md:relative flex flex-col '>
                        <picture className='w-full '>
                            <source media="(min-width: 1024px)"
                                    srcSet="/images/homepage/desktop/image-homepage-hero.jpg"/>
                            <source media="(min-width: 768px)"
                                    srcSet="/images/homepage/tablet/image-homepage-hero.jpg"
                                    className='w-full bg-blue-300'/>
                            <img src="/images/homepage/mobile/image-homepage-hero.jpg" alt="Hero Image"
                                 className='w-full'/>
                        </picture>
                        <div className='bg-white w-full md:absolute md:-bottom-16 md:left-0 md:max-w-[445px]'>
                            <h1 className='heading-1 mb-14'>
                                Hey, I’m Alex Spencer and I love building <br/> beautiful websites
                            </h1>
                            <button onClick={scrollToAbout}
                                    className='flex flex-row items-center bg-dark-blue hover:bg-slightly-desaturated-cyan'>
                                <div className='bg-black/10 h-12 w-12 flex items-center justify-center'>
                                    <img src='/images/icons/down-arrows.svg' alt='Arrow Down'/>
                                </div>
                                <p className='body-2 text-white w-[152px]'>ABOUT ME</p>
                            </button>
                        </div>
                    </div>
                    {/*End Hero Section*/}

                    {/*About Me Section*/}
                    <div id='about-me' className='flex md:flex-row flex-col mt-48 lg:max-w-5xl w-full md:gap-12'>
                        <div className='w-full md:w-1/2'>
                            <picture className='w-full h-full block'>
                                <source
                                    media="(min-width: 1024px)"
                                    srcSet="/images/homepage/desktop/image-homepage-profile.jpg"
                                />
                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/images/homepage/tablet/image-homepage-profile.jpg"
                                />
                                <img
                                    src="/images/homepage/mobile/image-homepage-profile.jpg"
                                    alt="Profile Image"
                                    className='w-full h-full object-cover'
                                />
                            </picture>
                        </div>

                        <div className='flex flex-col justify-between md:w-1/2'>
                            <hr className="h-px bg-grayish-dark-blue"/>
                            <div>
                                <h1 className='heading-2 text-grayish-dark-blue mt-14'>About Me</h1>
                                <p className='body-1 text-grayish-dark-blue mt-6 mb-4'>
                                    I'm a junior front-end developer looking for a new role in an exciting company. I
                                    focus
                                    on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
                                    When writing JavaScript code, I mostly use React, but I can adapt to whatever tools
                                    are
                                    required. I'm based in London, UK, but I'm happy working remotely and have
                                    experience in
                                    remote teams. When I'm not coding, you'll find me outdoors. I love being out in
                                    nature
                                    whether that's going for a walk, run or cycling. I'd love you to check out my work.
                                </p>
                                <Link to='/portfolio' onClick={() => window.scrollTo(0, 0)}>
                                    <button
                                        className='body-2 text-grayish-dark-blue border border-grayish-dark-blue mb-12 hover:bg-grayish-dark-blue hover:text-white'>
                                        <p className='mx-8 my-4'>GO TO PORTFOLIO</p>
                                    </button>
                                </Link>
                            </div>
                            <hr className="h-px bg-grayish-dark-blue"/>
                        </div>
                    </div>
                    {/*End About Me Section*/}

                    <ContactMeSection/>

                </div>
            </div>
            <Footer/>
        </div>)
};
