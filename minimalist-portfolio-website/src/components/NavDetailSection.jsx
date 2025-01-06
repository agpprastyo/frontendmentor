import {Link} from "react-router-dom";

const RenderNavigationSection = (previousItem, nextItem) => (
    <div className="w-full mx-auto mt-16 heading-3">
        <div className="relative h-32">
            {/* Horizontal border lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-grayish-dark-blue/20"/>
            <div className="absolute inset-x-0 bottom-0 h-px bg-grayish-dark-blue/20"/>
            {/* Vertical divider */}
            <div className="absolute left-1/2 top-0.5 h-full w-px bg-grayish-dark-blue/20"/>
            {/* Navigation links container */}
            <div className="flex justify-between items-center h-full px-4">
                {/* Previous Project */}
                {previousItem ? (
                    <Link to={`/portfolio/${previousItem.slug}`} onClick={() => window.scrollTo(0, 0)}
                          className="flex items-center space-x-10">
                        <img
                            src="/images/icons/arrow-left.svg"
                            alt="Previous"
                            className="w-4 h-4"
                        />
                        <div>
                            <h3 className="heading-3 text-grayish-dark-blue leading-9">
                                {previousItem.title}
                            </h3>
                            <span
                                className="body-1 text-grayish-dark-blue/50 leading-[30px]">
                                Previous Project
                            </span>
                        </div>
                    </Link>
                ) : (
                    <div className="w-32"/> // Placeholder for spacing
                )}

                {/* Next Project */}
                {nextItem ? (
                    <Link to={`/portfolio/${nextItem.slug}`} onClick={() => window.scrollTo(0, 0)}
                          className="flex items-center space-x-10">
                        <div className="text-right">
                            <h3 className="heading-3 text-grayish-dark-blue leading-9">
                                {nextItem.title}
                            </h3>
                            <span
                                className="body-1 text-grayish-dark-blue/50 leading-[30px]">
                                Next Project
                            </span>
                        </div>
                        <img
                            src="/images/icons/arrow-right.svg"
                            alt="Next"
                            className="w-4 h-4"
                        />
                    </Link>
                ) : (
                    <div className="w-32"/> // Placeholder for spacing
                )}
            </div>
        </div>
    </div>
);

export default RenderNavigationSection;