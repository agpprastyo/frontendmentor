const Features = () => {
    const featuresItems = [
        {
            img: "/images/icon-online.svg",
            title: "Online Banking",
            description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            img: "/images/icon-budgeting.svg",
            title: "Simple Budgeting",
            description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            img: "/images/icon-onboarding.svg",
            title: "Fast Onboarding",
            description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
        },
        {
            img: "/images/icon-api.svg",
            title: "Open API",
            description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
        }
    ];
    return (
        <div className="bg-neutral-lightGrayishBlue w-full py-24">
            <div className="container px-8 lg:px-0">
                <div className="flex flex-col items-start text-center">
                    <h2 className="text-4xl text-primary-darkBlue mb-8 ">Why choose Easybank?</h2>
                    <p className="text-neutral-grayishBlue text-lg lg:text-start mb-12">We leverage Open Banking to turn
                        your bank account into your financial hub.<br/> Control your finances like never before.</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between  gap-16 ">
                    {featuresItems.map((item, index) => (
                        <div key={index}
                             className="feature-item lg:text-start text-center flex flex-col items-center lg:items-start ">
                            <img src={item.img} alt={item.title} width={80} className="mb-8"/>
                            <h3 className="text-xl text-primary-darkBlue mb-2">{item.title}</h3>
                            <p className="text-neutral-grayishBlue">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default Features;