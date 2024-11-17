const CardItem = ({ title, subtitle, image, bgColor }) => {
    return (
        <div className="rounded-2xl flex flex-col justify-between bg-white shadow-2xl h-64 lg:w-96 lg:mx-0 mx-4">
            <div className={`h-2 w-full ${bgColor} rounded-t-2xl`}></div>
            <div className="px-8 pt-4">
                <h1 className="text-neutral-very-dark-blue font-body font-bold text-2xl mb-4">{title}</h1>
                <p className="text-neutral-grayish-blue font-body mb-8">{subtitle}</p>
            </div>
            <img src={image} alt={title} className="ml-auto mb-8 mr-8 self-end"/>
        </div>
    );
};

export default CardItem;