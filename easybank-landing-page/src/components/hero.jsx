import GradientButton from "./gradient-button.jsx";

const Hero = () => {
    return (
        <div className="relative ">
            <div
                className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-lightGrayishBlue to-neutral-white">
                <div className="container relative mx-auto">
                    <div className="flex py-36">

                        <div className="w-[45%] z-20">
                            <h1 className="text-6xl text-primary-darkBlue mb-9">
                                Next generation <br/>digital banking
                            </h1>
                            <p className="text-neutral-grayishBlue text-lg mb-9">
                                Take your financial life online. Your Easybank account<br/>
                                will be a one-stop-shop for spending, saving,<br/>
                                budgeting, investing, and much more.
                            </p>
                            <GradientButton text="Request Invite"/>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-[90%] h-full">
                    <img
                        src="/images/bg-intro-desktop.svg"
                        alt="Background Intro"
                        className="absolute  -top-64 -right-64"
                        width={1200}
                    />

                </div>

            </div>
            <div className="absolute -top-80 right-0 ">
                <img
                    src="/images/image-mockups-desktop.png"
                    alt="Mockups"
                    width={800}
                    className=""
                />
            </div>
        </div>

    );
};

export default Hero;