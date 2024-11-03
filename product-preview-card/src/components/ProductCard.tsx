import React from 'react';
import productImageDesktop from '../../public/images/image-product-desktop.jpg';
import productImageMobile from '../../public/images/image-product-mobile.jpg'; // Corrected this line

const ProductCard: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-xl lg:mx-auto mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <picture >
                <source media="(min-width: 1025px)" srcSet={productImageDesktop} className="object-cover h-full w-full bg-red-400"/>
                <img src={productImageMobile} alt="Gabrielle Essence Eau De Parfum" className="object-cover h-full w-full bg-red-400"/>
            </picture>
            <div className="px-6 py-8">
                <h2 className="text-md text-neutral-darkGrayishBlue mb-1">PERFUME</h2>
                <h1 className="text-4xl font-bold font-fraunces mb-2 text-neutral-veryDarkBlue">
                    Gabrielle
                    <br className="hidden sm:block"/> {/* Hide on small screens, show on sm and larger */}
                    Essence Eau De Parfum
                </h1>


                <p className="text-neutral-darkGrayishBlue mb-6">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="flex items-top mb-8 gap-6">
                    <span className="font-fraunces text-4xl font-bold text-primary-darkCyan">$149.99</span>
                    <span className="font-fraunces line-through text-neutral-darkGrayishBlue ml-2">$169.99</span>
                </div>
                <button
                    className="flex items-center justify-center w-full min-h-14 bg-primary-darkCyan text-white font-medium py-2 rounded hover:bg-primary-darkerDarkCyan transition">
                    <img src="/images/icon-cart.svg" alt="Cart Icon" className="mr-2"/>
                    Add to Cart
                </button>

            </div>
        </div>
    );
};

export default ProductCard;
