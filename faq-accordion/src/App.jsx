import {useState} from 'react';

function App() {
    const faqItems = [
        {
            title: 'What is Frontend Mentor, and how will it help me?',
            content: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable for all levels and ideal for portfolio building.'
        },
        {
            title: 'Is Frontend Mentor free?',
            content: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
        },
        {
            title: 'Can I use Frontend Mentor projects in my portfolio?',
            content: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It\'s an excellent way to showcase your skills to potential employers!'
        },
        {
            title: 'How can I get help if I\'m stuck on a Frontend Mentor challenge?',
            content: 'The best place to get help is inside Frontend Mentor\'s Discord community. There\'s a help channel where you can ask questions and seek support from other community members.'
        }
    ];

    // State to keep track of which FAQ is open
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        // Toggle the clicked index
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-full h-screen  bg-light-pink'>
            <div className='relative flex flex-col'>
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/background-pattern-desktop.svg"/>
                    <img src="/images/background-pattern-mobile.svg" alt="Background pattern" className="w-full"/>
                </picture>
                <div className=''>

                    <div
                        className='lg:max-w-2xl w-full max-w-[90%]  bg-white absolute left-1/2 lg:top-80 top-24  transform -translate-x-1/2 flex flex-col p-8 rounded-lg shadow-2xl'>
                        <div className='flex flex-row gap-6 items-center'>
                            <img src='/images/icon-star.svg' alt='Star Icon'/>
                            <h1 className='font-bold text-6xl text-dark-purple'>FAQs</h1>
                        </div>
                        <div className='flex flex-col gap-6 mt-8'>
                            {faqItems.map((item, index) => (
                                <div key={index} className='flex flex-col gap-2'>
                                    <div className='flex flex-row items-center justify-between cursor-pointer w-full'
                                         onClick={() => toggleFAQ(index)}>
                                        <h2 className='font-bold text-lg text-dark-purple'>{item.title}</h2>
                                        {/* Conditionally render icons based on open state */}
                                        {openIndex === index ? (
                                            <img src='/images/icon-minus.svg' alt='icon Minus'/>
                                        ) : (
                                            <img src='/images/icon-plus.svg' alt='Icon Plus'/>
                                        )}
                                    </div>
                                    {/* Use a fixed height to prevent width change */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className='text-grayish-purple pr-4'>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
