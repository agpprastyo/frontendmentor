import React, {useState} from 'react';

const Hero = () => {
    const [unit, setUnit] = useState('metric'); // State for unit type
    const [height, setHeight] = useState(''); // State for height
    const [weight, setWeight] = useState(''); // State for weight
    const [bmi, setBmi] = useState(null); // State for BMI result
    const [classification, setClassification] = useState(''); // BMI classification
    const [healthyWeightRange, setHealthyWeightRange] = useState(''); // Healthy weight range
    const [error, setError] = useState(''); // State for error messages

    const bmiInput = [
        {id: 'metric', title: 'Metric'},
        {id: 'imperial', title: 'Imperial'},
    ];

    const calculateBMI = () => {
        // Reset error message
        setError('');

        // Validate inputs
        if (!height || !weight) {
            setError('Height and weight cannot be empty.');
            return;
        }
        if (isNaN(height) || isNaN(weight)) {
            setError('Height and weight must be numbers.');
            return;
        }

        let heightInMeters;
        let weightInKg;

        // Convert height and weight based on the unit
        if (unit === 'metric') {
            heightInMeters = height / 100; // height is in cm
            weightInKg = weight; // weight is in kg
        } else {
            heightInMeters = height * 0.0254; // height is in inches
            weightInKg = weight * 0.453592; // weight is in pounds
        }

        const bmiResult = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmiResult.toFixed(2));

        // Determine classification and healthy weight range
        if (bmiResult < 18.5) {
            setClassification("Underweight");
            setHealthyWeightRange(`Your healthy weight range is ${(18.5 * (heightInMeters ** 2)).toFixed(2)} kg to ${(24.9 * (heightInMeters ** 2)).toFixed(2)} kg.`);
        } else if (bmiResult >= 18.5 && bmiResult < 25) {
            setClassification("Healthy weight");
            setHealthyWeightRange(`Your healthy weight range is ${(18.5 * (heightInMeters ** 2)).toFixed(2)} kg to ${(24.9 * (heightInMeters ** 2)).toFixed(2)} kg.`);
        } else if (bmiResult >= 25 && bmiResult < 30) {
            setClassification("Overweight");
            setHealthyWeightRange(`Your healthy weight range is ${(18.5 * (heightInMeters ** 2)).toFixed(2)} kg to ${(24.9 * (heightInMeters ** 2)).toFixed(2)} kg.`);
        } else {
            setClassification("Obese");
            setHealthyWeightRange(`Your healthy weight range is ${(18.5 * (heightInMeters ** 2)).toFixed(2)} kg to ${(24.9 * (heightInMeters ** 2)).toFixed(2)} kg.`);
        }
    };

    return (
        <div className='flex flex-col'>
            <div
                className='lg:w-3/4 w-full h-[737px] lg:ml-6 bg-gradient-to-l from-[#d5e5fd]/35 to-[#d5fbfd]/0 rounded-b-3xl '>
                <img src='/logo.png' alt='Logo' className='mx-auto lg:mx-0 lg:pl-32 lg:pt-16 pt-8'/>
                <div className='lg:pl-32 lg:pt-32 lg:text-start text-center mx-6 lg:mx-0 '>
                    <h1 className='font-medium text-6xl text-gunmetal'>Body Mass <br/>Index Calculator</h1>
                    <p className='lg:max-w-xl text-lg text-dark-electric-blue pt-8 '>
                        Better understand your weight in relation to your height using our body mass index (BMI)
                        calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable
                        starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </div>

            <div
                className='lg:max-w-xl md:max-w-full bg-pure-white shadow-2xl absolute lg:right-0 md:right-0 lg:left-[784px] md:left-0 lg:top-32 md:top-96 top-[521px] mx-6 md:mx-8 rounded-2xl'>
                <div className='p-8'>
                    <fieldset>
                        <legend className="text-gunmetal font-semibold text-2xl">Enter your details below</legend>
                        <div className="my-6 space-y-0 flex items-center justify-center sm:space-x-10 sm:space-y-0 ">
                            {bmiInput.map((items) => (
                                <div key={items.id} className=" w-full flex items-center  ">
                                    <input
                                        checked={items.id === unit}
                                        onChange={() => setUnit(items.id)} // Update unit selection
                                        id={items.id}
                                        name="notification-method"
                                        type="radio"
                                        className="h-4 w-4 text-blue focus:ring-blue/15 focus:ring-offset-0 focus:ring-8"
                                    />
                                    <label htmlFor={items.id}
                                           className="ml-3 block text-sm font-medium leading-6 text-gunmetal">
                                        {items.title}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                    <div className='flex lg:flex-row md:flex-row flex-col gap-6 justify-between'>
                        <div className='w-full '>
                            <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900 ">
                                Height {unit === 'metric' ? '(cm)' : '(inches)'}
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    id="height"
                                    name="height"
                                    type="text"
                                    placeholder="0.00"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)} // Set height value
                                    className={`block w-full min-h-16 rounded-md border-0 py-1.5 pl-6 pr-12 text-gray-900 ring-1 ring-inset ${error ? "ring-red-500" : "ring-gray-300"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                        <div className='w-full '>
                            <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                                Weight {unit === 'metric' ? '(kg)' : '(pounds)'}
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    id="weight"
                                    name="weight"
                                    type="text"
                                    placeholder="0.00"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)} // Set weight value
                                    className={`block w-full min-h-16 rounded-md border-0 py-1.5 pl-6 pr-12 text-gray-900 ring-1 ring-inset ${error ? "ring-red-500" : "ring-gray-300"} placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={calculateBMI} // Trigger BMI calculation
                        className={`bg-blue text-white p-4 rounded-lg mt-6 w-full hover:bg-blue-600`}
                    >
                        Calculate BMI
                    </button>
                    <div className={`bg-blue text-white p-9 lg:rounded-r-full lg:rounded-l-lg rounded-lg mt-8`}>
                        {error ? (
                            <p className='font-semibold text-2xl pb-4'>{error}</p>
                        ) : (
                            bmi ? (
                                <>
                                    <p className='font-semibold text-2xl pb-4'>Your BMI is {bmi}</p>
                                    <p className='text-sm'>Your BMI suggests you’re {classification}.</p>
                                    <p className='text-sm'>{healthyWeightRange}</p>
                                </>
                            ) : (
                                <div>
                                    <p className='font-semibold text-2xl pb-4'>Welcome!</p>
                                    <p className='text-sm'>Enter your height and weight and you’ll see your BMI result
                                        here</p>
                                </div>

                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
