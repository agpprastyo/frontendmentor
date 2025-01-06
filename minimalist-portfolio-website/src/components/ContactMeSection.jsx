import {Link} from "react-router-dom";

const ContactMeSection = () => {
    return (
        <div className='my-40 w-full flex md:flex-row flex-col gap-8 items-center md:justify-between'>
            <h1 className='heading-2 w-full md:px-0 px-8 text-center md:text-start'>Interested in doing a project
                together?</h1>
            <hr className="hidden md:inline h-px lg:min-w-[434px] md:max-w-28 w-1/2 bg-grayish-dark-blue"/>
            <Link to='/contact-me' onClick={() => window.scrollTo(0, 0)}>
                <button
                    className='body-2 text-grayish-dark-blue border border-grayish-dark-blue hover:bg-grayish-dark-blue hover:text-white'>
                    <p className='mx-8 my-4 whitespace-nowrap'>CONTACT ME</p>
                </button>
            </Link>
        </div>
    );
};
export default ContactMeSection;