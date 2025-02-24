import { Dessert } from "../types/dessertTypes";
import { CartItem } from "../types/cartTypes";


interface AddToCartButtonProps {
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemName: string) => void;
    cart: CartItem[];
    dessert: Dessert;
}

const AddToCartButton = ({ addToCart, removeFromCart, cart, dessert }: AddToCartButtonProps) => {
    const quantity = cart.find(item => item.dessert.name === dessert.name)?.quantity || 0;

    const incrementQuantity = () => {
        addToCart({ dessert, quantity: 1 });
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            addToCart({ dessert, quantity: -1 });
        } else {
            removeFromCart(dessert.name);
        }
    };

    return (
        <div className="absolute -bottom-4">
            {quantity === 0 ? (
                <button
                    className="group bg-white border border-color-rose-400 text-color-rose-900 py-2 px-6 rounded-full hover:bg-color-red hover:border-none hover:text-white"
                    onClick={incrementQuantity}
                >
                    <div className='flex flex-row gap-2'>
                        <p className='text-preset-4-bold text-color-rose-900 group-hover:text-white'>Add to cart</p>
                    </div>
                </button>
            ) : (
                <button className="flex flex-row justify-between gap-8 group bg-color-red text-white py-2 px-2 rounded-full">
                    <img
                        src="/public/images/icon-decrement-quantity.svg"
                        alt="Decrement cart"
                        onClick={decrementQuantity}
                        className="cursor-pointer"
                    />
                    <p className='text-preset-4-bold'>{quantity}</p>
                    <img
                        src="/public/images/icon-increment-quantity.svg"
                        alt="Increment cart"
                        onClick={incrementQuantity}
                        className="cursor-pointer"
                    />
                </button>
            )}
        </div>
    );
};

export default AddToCartButton;
