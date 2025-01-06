import {useState} from 'react';
import Footer from "../components/Footer.jsx";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: '' // Clear error for input being changed
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate name
        if (!formData.name) {
            newErrors.name = 'Name is required';
        } else if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long';
        }

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email is not valid';
        }

        // Validate message
        if (!formData.message) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);

        // If there are no errors, reset the form and handle submission
        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData); // Add your form submission logic here

            // Clear the form fields
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }
    };


    return (
        <div className='min-h-full flex flex-col bg-very-light-gray'>
            <div className='flex-grow'>
                <div className='lg:max-w-6xl w-full px-8 md:px-10 mt-14 mx-auto flex flex-col'>
                    {/* Get in Touch Section */}
                    <hr className="h-px bg-grayish-dark-blue"/>
                    <div className='flex lg:flex-row flex-col gap-8 lg:gap-32 justify-between py-8 lg:py-12'>
                        <h1 className='heading-2 mb-6 lg:mb-0'>Get in Touch</h1>
                        <div className='flex flex-col gap-6 lg:max-w-2xl'>
                            <p className='body-1 text-grayish-dark-blue'>
                                I'd love to hear about what you're working on and how I could help.
                                I'm currently looking for a new role and am open to a wide range of opportunities.
                                My preference would be to find a position in a company in London. But I'm also happy
                                to hear about opportunities that don't fit that description. I'm a hard-working and
                                positive person who will always approach each task with a sense of purpose and
                                attention to detail. Please do feel free to check out my online profiles below and
                                get in touch using the form.
                            </p>
                            <div className='flex flex-row gap-4 items-center'>
                                <a href='https://github.com/your-username'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='hover:opacity-70 transition-opacity'>
                                    <img src='/images/icons/github.svg' alt='Github Icon'/>
                                </a>
                                <a href='https://twitter.com/your-username'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='hover:opacity-70 transition-opacity'>
                                    <img src='/images/icons/twitter.svg' alt='Twitter Icon'/>
                                </a>
                                <a href='https://www.linkedin.com/in/your-username/'
                                   target='_blank'
                                   rel='noopener noreferrer'
                                   className='hover:opacity-70 transition-opacity'>
                                    <img src='/images/icons/linkedin.svg' alt='Linkedin Icon'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <hr className="h-px bg-grayish-dark-blue"/>
                    <div className='flex lg:flex-row flex-col gap-8 lg:gap-32 justify-between py-8 lg:py-12'>
                        <h1 className='heading-2 mb-6 lg:mb-0'>Contact Me</h1>
                        <div className='flex flex-col flex-grow lg:max-w-2xl'>
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className='space-y-6'>
                                    <div>
                                        <label htmlFor="name"
                                               className="block text-sm font-semibold leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                autoComplete="given-name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full border-0 px-3.5 py-2 bg-grayish-dark-blue/10 text-gray-900
                                                 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                                 focus:ring-slightly-desaturated-cyan sm:text-sm sm:leading-6"
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email"
                                               className="block text-sm font-semibold leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full border-0 px-3.5 py-2 bg-grayish-dark-blue/10 text-gray-900
                                                 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                                 focus:ring-slightly-desaturated-cyan sm:text-sm sm:leading-6"
                                            />
                                            {errors.email &&
                                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message"
                                               className="block text-sm font-semibold leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full border-0 px-3.5 py-2 bg-grayish-dark-blue/10 text-gray-900
                                                 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                                                 focus:ring-slightly-desaturated-cyan sm:text-sm sm:leading-6"
                                    />
                                            {errors.message &&
                                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="w-full md:w-[200px] bg-dark-blue hover:bg-slightly-desaturated-cyan h-12
                                         px-3.5 text-center text-sm font-semibold text-white shadow-sm
                                         focus-visible:outline-dark-blue transition-colors"
                                    >
                                        Let&apos;s talk
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactMe;
