import { useState } from "react";

export const App = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        queryType: 'General Enquiry',
        message: '',
        consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        // Clear errors for the field being edited
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validate = () => {
        const newErrors = {};
        // First Name Validation
        if (!formData.firstName) {
            newErrors.firstName = 'This field is required';
        }
        // Last Name Validation
        if (!formData.lastName) {
            newErrors.lastName = 'This field is required';
        }
        // Email Validation
        if (!formData.email) {
            newErrors.email = 'This field is required';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }
        // Query Type Validation
        if (!formData.queryType) {
            newErrors.queryType = 'Please select a query type';
        }
        // Message Validation
        if (!formData.message) {
            newErrors.message = 'This field is required';
        }
        // Consent Validation
        if (!formData.consent) {
            newErrors.consent = 'To submit this form, please consent to being contacted';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;  // return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            alert('Message Sent! Thanks for completing the form. We\'ll be in touch soon!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                queryType: 'General Enquiry',
                message: '',
                consent: false,
            });
            setErrors({});
        }
    };

    return (
        <div className="flex lg:items-center h-screen w-screen lg:overflow-hidden overflow-auto font-karla bg-green-200 px-4 py-6 lg:p-0">
            <form className="w-full max-w-lg h-fit mx-auto p-4 bg-white shadow-md rounded-xl text-grey-900" noValidate onSubmit={handleSubmit}>
                <h2 className="lg:text-xl text-4xl font-bold mb-4">Contact Us</h2>
                <div className="flex lg:flex-row flex-col">
                    <div className="mb-4 lg:w-1/2 w-full lg:pr-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className={`mt-1 block w-full p-2 border rounded-md 
                                ${errors.firstName ? 'border-red' : 'border-gray-300'}
                                focus:border-green-600 focus:ring-1 focus:ring-inset focus:ring-green-600
                                hover:border-green-600 active:border-green-600 transition-colors duration-200`}
                        />
                        {errors.firstName && <p className="text-red text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="mb-4 lg:w-1/2 w-full lg:pl-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className={`mt-1 block w-full p-2 border rounded-md 
                                ${errors.lastName ? 'border-red' : 'border-gray-300'}
                                focus:border-green-600 focus:ring-1 focus:ring-inset focus:ring-green-600
                                hover:border-green-600 active:border-green-600 transition-colors duration-200`}
                        />
                        {errors.lastName && <p className="text-red text-sm">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full p-2 border rounded-md 
                            ${errors.email ? 'border-red' : 'border-gray-300'}
                            focus:border-green-600 focus:ring-1 focus:ring-inset focus:ring-green-600
                            hover:border-green-600 active:border-green-600 transition-colors duration-200`}
                    />
                    {errors.email && <p className="text-red text-sm">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Query Type</label>
                    <div className="flex flex-col lg:flex-row mt-2 gap-4 lg:gap-0">
                        <div
                            className={`flex items-center mr-4 border h-12 w-full pl-4 rounded-md 
                                        cursor-pointer ${formData.queryType === "General Enquiry" ? 'border-green-600 bg-green-200' : 'border-gray-300'}`}
                            onClick={() => setFormData({ ...formData, queryType: "General Enquiry" })}
                        >
                            <input
                                type="radio"
                                name="queryType"
                                value="General Enquiry"
                                checked={formData.queryType === "General Enquiry"}
                                onChange={handleChange}
                                className="focus:ring-green-600 h-4 w-4 text-green-600 border-gray-300 rounded-full"
                            />
                            <label className="ml-2 text-sm text-gray-700">General Enquiry</label>
                        </div>
                        <div
                            className={`flex items-center border h-12 w-full pl-4 rounded-md 
                                        cursor-pointer ${formData.queryType === "Support Request" ? 'border-green-600 bg-green-200' : 'border-gray-300'}`}
                            onClick={() => setFormData({ ...formData, queryType: "Support Request" })}
                        >
                            <input
                                type="radio"
                                name="queryType"
                                value="Support Request"
                                checked={formData.queryType === "Support Request"}
                                onChange={handleChange}
                                className="focus:ring-green-600 h-4 w-4 text-green-600 border-gray-300 rounded-full"
                            />
                            <label className="ml-2 text-sm text-gray-700">Support Request</label>
                        </div>
                    </div>
                    {errors.queryType && <p className="text-red text-sm">{errors.queryType}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className={`mt-1 block w-full p-2 border rounded-md 
                    
                            ${errors.message ? 'border-red' : 'border-gray-300'}
                            focus:border-green-600 focus:ring-1 focus:ring-inset focus:ring-green-600
                            hover:border-green-600 active:border-green-600 transition-colors duration-200`}
                    />
                    {errors.message && <p className="text-red text-sm">{errors.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className={`${errors.consent ? 'border-red' : 'border-gray-300'} rounded focus:ring-green-600 text-green-600 
                           focus:ring-2 focus:ring-offset-2 hover:ring-green-500`}
                        />
                        <span className="ml-2 text-sm text-gray-700">I consent to being contacted by the team</span>
                    </label>
                    {errors.consent && <p className="text-red text-sm">{errors.consent}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full p-2 bg-green-700 text-white rounded
                   hover:bg-grey-500 active:bg-green-700
                   active:scale-95
                   focus:outline-none transition duration-150 ease-in-out"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
