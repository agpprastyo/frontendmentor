import GradientButton from "./gradient-button.jsx";

const Footer = () => {
    const socialIcons = [
        {name: "facebook", url: "https://www.facebook.com", img: "/images/icon-facebook.svg"},
        {name: "youtube", url: "https://www.youtube.com", img: "/images/icon-youtube.svg"},
        {name: "twitter", url: "https://www.twitter.com", img: "/images/icon-twitter.svg"},
        {name: "pinterest", url: "https://www.pinterest.com", img: "/images/icon-pinterest.svg"},
        {name: "instagram", url: "https://www.instagram.com", img: "/images/icon-instagram.svg"},
    ]
    return (
        <div className="bg-primary-darkBlue py-16">
            <div className="container flex lg:flex-row flex-col justify-between items-center">
                <div className="flex flex lg:flex-row flex-col lg:gap-24 gap-3">
                    <div className="flex flex-col lg:gap-16 gap-8">
                        <a href="#">
                            <img src="/images/logo-white.svg" alt="logo" className="w-48"/>
                        </a>
                        <div className="flex justify-between space-x-4">
                            {socialIcons.map((icon, index) => (
                                <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
                                    <img src={icon.img} alt={icon.name} className="w-6 h-6"/>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <ul className="text-neutral-veryLightGray lg:text-start text-center">
                            <li className="lg:mb-4 mb-2">
                                <a href="#about" className="hover:text-primary-limeGreen">About Us</a>
                            </li>
                            <li className="lg:mb-4 mb-2">
                                <a href="#contact" className="hover:text-primary-limeGreen">Contact</a>
                            </li>
                            <li className="lg:mb-4 mb-2">
                                <a href="#blog" className="hover:text-primary-limeGreen">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4 lg:mb-0">
                        <ul className="text-neutral-veryLightGray lg:text-start text-center ">
                            <li className="lg:mb-4 mb-2">
                                <a href="#careers" className="hover:text-primary-limeGreen">Careers</a>
                            </li>
                            <li className="lg:mb-4 mb-2">
                                <a href="#support" className="hover:text-primary-limeGreen">Support</a>
                            </li>
                            <li className="lg:mb-4 mb-2">
                                <a href="#privacy-policy" className="hover:text-primary-limeGreen">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:items-end items-center">
                    <GradientButton text="Request Invite"/>
                    <p className="text-neutral-grayishBlue  lg:mt-4 mt-8 text-end">© Easybank. All Rights
                        Reserved</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;