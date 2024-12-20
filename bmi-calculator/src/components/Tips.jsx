const Tips = () => {
    const tips = [
        {
            img: '/tips1.png',
            title: 'Healthy eating',
            description: 'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
        },
        {
            img: '/tips2.png',
            title: 'Regular exercise',
            description: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
        },
        {
            img: '/tips3.png',
            title: 'Adequate sleep',
            description: 'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
        },
    ];

    return (
        <div className='lg:mx-6 mt-20 lg:rounded-[36px]  bg-gradient-to-l from-[#d5e5fd]/25 to-[#d5fbfd]/0'>
            <div className='lg:px-36 pt-20 pb-24'>
                {/* Tips items */}
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-10 '>
                    {tips.map((tip, index) => (
                        <div key={index}
                             className='flex lg:flex-col md:flex-row flex-col lg:items-start items-start md:items-center gap-0 md:gap-6 text-start lg:px-0 px-6  '>
                            <img src={tip.img} alt={tip.title} className='w-auto h-16  '/>
                            <div>

                                <h3 className='text-gunmetal text-2xl font-bold mt-11 md:mt-0 mb-6'>{tip.title}</h3>
                                <p className='text-dark-electric-blue '>{tip.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tips;
