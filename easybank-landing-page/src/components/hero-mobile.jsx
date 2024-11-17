import GradientButton from "./gradient-button.jsx";

const HeroMobile = () => {
    return (
        <div className="relative flex flex-col bg-gradient-to-b from-neutral-lightGrayishBlue to-neutral-white">
            <div className="-mt-24">

                <img src="/images/bg-intro-mobile.svg" alt="Background"
                     className="absolute inset-0 w-full  object-cover"/>
                <img src="/images/image-mockups.png" alt="Mockups" className="relative z-10 mx-auto"/>

            </div>
            <div className="self-center text-center my-8">
                <h1 className="text-4xl text-primary-darkBlue mb-9">
                    Next generation <br/>digital banking
                </h1>
                <p className="text-neutral-grayishBlue text-lg mb-9 mx-8">
                    Take your financial life online. Your Easybank account
                    will be a one-stop-shop for spending, saving,
                    budgeting, investing, and much more.
                </p>
                <GradientButton text="Request Invite"/>
            </div>

        </div>
    );
};

export default HeroMobile;