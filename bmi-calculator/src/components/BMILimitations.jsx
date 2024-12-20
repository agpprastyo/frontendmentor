const LimitationCard = ({img, title, description, className = ''}) => (
    <div className={`p-8 bg-white rounded-2xl shadow-[16px_32px_56px_0px_rgba(143,174,207,0.25)] ${className}`}>
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <img src={img} alt='null'/>
                <h2 className="text-[#253347] text-xl font-semibold font-['Inter']">{title}</h2>
            </div>
            <p className="text-[#5d6d84] text-base font-normal font-['Inter'] leading-normal">
                {description}
            </p>
        </div>
    </div>
);

const BmiLimitations = () => {
    const limitations = [
        {
            img: '/images/icon-gender.svg',
            title: 'Gender',
            description: 'The development and body fat composition of girls and boys vary with age. Consequently, a child\'s age and gender are considered when evaluating their BMI.',
        },
        {
            img: '/images/icon-age.svg',
            title: 'Age',
            description: 'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
        },
        {
            img: 'public/images/icon-muscle.svg',
            title: 'Muscle',
            description: 'BMI may misclassified muscular individuals as overweight or obese, as it doesn\'t differentiate muscle from fat.',
        },
        {
            img: '/images/icon-pregnancy.svg',
            title: 'Pregnancy',
            description: 'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
        },
        {
            img: '/images/icon-race.svg',
            title: 'Race',
            description: 'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
        },
    ];

    return (
        <div className="lg:px-36 px-6 lg:py-32 pb-24 lg:relative">
            <div className="lg:max-w-lg mb-16 lg:text-start text-center">
                <h1 className="text-5xl font-semibold text-gunmetal pb-9">BMI Limitations</h1>
                <p className="text-base text-dark-electric-blue">
                    Although BMI is often a practical indicator of healthy weight, it is not suited for every
                    person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the
                    measurement may not be beneficial to use.
                </p>
                <img src='/images/pattern-curved-line-right.svg' alt='' className='pt-16 lg:mr-40 hidden lg:inline'/>
            </div>

            <div
                className="grid lg:grid-cols-12 md:grid-cols-4  grid-cols-1 gap-8 lg:absolute lg:top-32  lg:pb-32  ">
                {/* Gender card - spans 4 columns, positioned in the right section */}
                <div className="lg:col-start-6 lg:col-span-4 md:col-span-2 ">
                    <LimitationCard className='h-64'{...limitations[0]} />
                </div>

                {/* Age and Muscle cards - span 4 columns each */}
                <div className="lg:col-span-4 lg:col-start-4 md:col-span-2 md:col-start-3 ">
                    <LimitationCard className='h-64' {...limitations[1]} />
                </div>
                <div className="lg:col-span-4  md:col-span-2 ">
                    <LimitationCard className='h-64' {...limitations[2]} />
                </div>

                {/* Pregnancy and Race cards - span 4 columns each */}
                <div className="lg:col-start-1 lg:col-span-4 md:col-span-2 md:col-start-3">
                    <LimitationCard {...limitations[3]} />
                </div>
                <div className="lg:col-span-4 md:col-span-2 md:col-start-2">
                    <LimitationCard {...limitations[4]} />
                </div>
            </div>
        </div>
    );
};

export default BmiLimitations;
