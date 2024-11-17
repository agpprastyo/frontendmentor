import FeaturesCard from "./components/features-card.jsx";

export const App = () => (
    <div className="w-full lg:h-full  bg-neutral-very-light-gray flex flex-col items-center lg:mx-auto px-4 lg:overflow-hidden  lg:pb-0 pb-4 " >

        <div className="mt-12 ">
            <h1 className="text-neutral-very-dark-blue font-body font-light text-4xl text-center mb-2">Reliable, efficient delivery</h1>
            <h1 className="text-neutral-very-dark-blue font-body font-bold text-4xl text-center mb-8">Powered by Technology</h1>
            <p className="text-neutral-grayish-blue font-body text-center mb-2">Our Artificial Intelligence powered tools use millions of project data </p>
            <p className="text-neutral-grayish-blue font-body text-center">points to ensure that your project is successful</p>
        </div>

        <FeaturesCard/>


    </div>

);
