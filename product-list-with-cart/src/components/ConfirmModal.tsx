import { useState} from "react";
import {useCart} from "@/context/CartContext.tsx";
import * as React from "react";



const ConfirmOrderButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, clearCart } = useCart();

    const handleConfirm = () => {
        clearCart();
        setIsModalOpen(false);
        // window.location.href = "/";
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {/* Confirm Order Button */}
            <button className="w-full" onClick={() => setIsModalOpen(true)}>
                <div className="flex flex-row w-full items-center justify-center py-4 bg-color-red rounded-full text-white hover:bg-red-950">
                    <p className="text-preset-4-bold">Confirm Order</p>
                </div>
            </button>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div onClick={handleOverlayClick} className="fixed inset-0 flex tablet:items-center items-end justify-center h-screen  bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg  desktop:w-[592px] w-full tablet:mx-10 mx-0 mobile:mx-0">
                        <img src='public/images/icon-order-confirmed.svg' alt='Order confirm'/>
                        <h2 className="text-preset-1 text-color-rose-900 mt-6">Order Confirmed</h2>
                        <p className="mt-2 text-preset-4 text-color-rose-500">We hope you enjoy your food!</p>

                        {/* Scrollable Cart Items */}
                        <div className="bg-color-rose-50 mt-4">
                            {cart.length === 0 ? (
                                <p className="text-center text-gray-500">No items in your cart.</p>
                            ) : (
                                <div className="flex flex-col">
                                    {/* Scrollable cart items */}
                                    <div className="max-h-48 overflow-y-auto">
                                        <ul className="space-y-2">
                                            {cart.map((item, index) => (
                                                <li key={index} className="flex flex-row justify-between items-center p-2 border-b border-color-rose-100">
                                                    <div className='flex flex-row gap-4'>

                                                    <img src={item.dessert.image.thumbnail} alt='thumnail of dessert' className='w-12 h-12 rounded-lg'/>
                                                    <div className='flex flex-col'>
                                                    <span className="text-preset-4-bold text-color-rose-900">{item.dessert.name}</span>
                                                        <div className='flex flex-row gap-2'>
                                                            <span className="text-preset-4-bold text-color-red">{item.quantity}x</span>
                                                            <span className="text-preset-3 text-color-rose-900">@ ${item.dessert.price.toFixed(2)}</span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <span className="text-preset-4 text-color-rose-500">${(item.dessert.price * item.quantity).toFixed(2)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Fixed total at bottom */}
                                    <div className="flex justify-between items-center p-2 bg-color-rose-50">
                                        <span className="text-preset-4 text-color-rose-900">Total</span>
                                        <span className="text-preset-2 text-color-rose-900">${cart.reduce((total, item) => total + item.dessert.price * item.quantity, 0).toFixed(2)}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                            <button className="w-full h-14 mt-4 bg-color-red text-white rounded-full hover:bg-red-950" onClick={handleConfirm}>
                                Start New Order
                            </button>

                    </div>
                </div>
            )}
        </>
    );
};


export default ConfirmOrderButton;