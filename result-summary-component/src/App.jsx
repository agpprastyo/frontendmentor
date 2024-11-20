import data from './data/data.json';

export const App = () => {
    const colors = [
        'bg-red-50 text-light-red',
        'bg-yellow-50 text-orange-yellow',
        'bg-green-50 text-green-teal',
        'bg-blue-50 text-cobalt-blue'
    ];
    return (
        <div className="bg-white h-full w-full mx-0 my-auto flex lg:items-center justify-center font-hanken">
            <div className="lg:shadow-2xl lg:rounded-3xl flex lg:flex-row flex-col lg:w-2/6 overflow-hidden">
                {/* Result Section */}
                <div
                    className="lg:w-1/2   py-8 lg:rounded-3xl rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue text-white  justify-between text-center">
                    <h1 className="font-bold text-xl text-light-lavender pb-2">Your Result</h1>
                    <div className="flex flex-col items-center px-8 ">
                        <div
                            className="rounded-full bg-gradient-to-b from-violet-blue to-transparent w-48 h-48 my-4  flex flex-col items-center justify-center">
                            <h2 className="text-6xl font-bold mb-1">76</h2>
                            <p className="text-lg text-light-lavender">of 100</p>
                        </div>
                        <h2 className="text-3xl font-bold my-2">Great</h2>
                        <p className="text-md text-light-lavender  mx-6 mt-4">You scored higher than 65% of the people
                            who have taken these tests.</p>
                    </div>
                </div>

                {/* Summary Section */}
                <div className="px-6 py-8 lg:w-1/2">
                    <p className="font-bold text-xl text-dark-gray-blue pb-4">Summary</p>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}
                                className={`flex justify-between items-center p-4 rounded-xl mb-4 ${colors[index % colors.length]}`}>
                                <div className="flex items-center">
                                    <img src={item.icon} alt={item.category} className="mr-2"/>
                                    {item.category}
                                </div>
                                <div className="text-gray-500 font-normal ">
                                    <div className="font-bold text-dark-gray-blue inline-block">{item.score} </div>
                                    &nbsp;/ 100
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button
                        className="w-full bg-dark-gray-blue text-white py-4 px-4 rounded-full mt-4 hover:bg-gradient-to-b hover:from-violet-blue hover:to-cobalt-blue">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};