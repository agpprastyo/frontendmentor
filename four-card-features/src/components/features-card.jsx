import CardItem from "./CardItem.jsx";

const FeaturesCard = () => {
    return (
        <div className=" h-full w-full  flex lg:flex-row flex-col mx-auto  items-center justify-center gap-8 mt-4 ">
            <CardItem
                title="Supervisor"
                subtitle="Monitors activity to identify project roadblocks"
                image="/images/icon-supervisor.svg"
                bgColor="bg-primary-red"
            />
            <div className="flex flex-col gap-8">
                <CardItem
                    title="Team Builder"
                    subtitle="Scans our talent network to create the optimal team for your project"
                    image="/images/icon-team-builder.svg"
                    bgColor="bg-primary-cyan"
                />
                <CardItem
                    title="Karma"
                    subtitle="Regularly evaluates our talent to ensure quality"
                    image="/images/icon-karma.svg"
                    bgColor="bg-primary-orange"
                />
            </div>
            <CardItem
                title="Calculator"
                subtitle="Uses data from past projects to provide better delivery estimates"
                image="/images/icon-calculator.svg"
                bgColor="bg-primary-blue"/>
        </div>
    );
};

export default FeaturesCard;
