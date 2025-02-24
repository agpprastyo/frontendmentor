import useDesserts from './hooks/useDesserts';

import ConfirmOrderButton from "@/components/ConfirmModal.tsx";
import AddToCartButton from "@/components/AddToCartButton.tsx";
import {useCart} from "@/context/CartContext.tsx";


function App() {

    const { desserts, loading } = useDesserts();
    const { cart, addToCart, removeFromCart } = useCart();




  return (
      <div className='bg-color-rose-50 h-full w-full'>
          <div className=' desktop:py-10 tablet:py-10 py-6 desktop:mx-28 tablet:mx-10 mx-6'>
              <div className="flex  gap-8 flex-wrap   justify-center">
                  <div className="flex-1 min-w-0 max-w-[800px]  ">
                     <h1 className='text-preset-1'>Desserts</h1>
                      <div>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                               <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                                    {desserts.map((dessert) => {
                                        const quantity = cart.find(item => item.dessert.name === dessert.name)?.quantity || 0;
                                        return    (
                                            <li key={dessert.name} className=' rounded-xl '>
                                                <div className='relative flex justify-center'>

                                                    <picture className={quantity > 0 ? 'border-2 border-color-red rounded-lg' : 'border-none'}>
                                                        <source srcSet={dessert.image.desktop} media="(min-width: 1440px)" />
                                                        <source srcSet={dessert.image.tablet} media="(min-width: 768px)" />
                                                        <source srcSet={dessert.image.mobile} media="(max-width: 375px)" />
                                                        <img
                                                            src={dessert.image.mobile}
                                                            alt={dessert.name}
                                                            className="tablet:aspect-square aspect-3/2 tablet:object-cover object-fill rounded-lg"
                                                        />
                                                    </picture>
                                                    <AddToCartButton
                                                        dessert={dessert}
                                                        cart={cart}
                                                        addToCart={addToCart}
                                                        removeFromCart={removeFromCart}
                                                    />

                                                </div>
                                                <div className='mt-9'>

                                                    <h2 className='text-preset-4 text-color-rose-500'>{dessert.category}</h2>
                                                    <p className='text-preset-3 text-color-rose-900'>{dessert.name}</p>
                                                    <p className='text-preset-3 text-color-red'>${dessert.price}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}

                      </div>
                  </div>
                  <div className="w-full desktop:w-[384px] bg-white p-6 rounded-xl h-fit">
                      <h1 className="text-preset-2 text-red-600">
                          Your Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
                      </h1>

                      {cart.length === 0 ? (
                          <div className="mx-0 w-full items-center flex flex-col mt-14">
                              <img src="/images/illustration-empty-cart.svg" alt="Empty cart" />
                              <p className="text-preset-4-bold text-rose-500">
                                  Your added items will appear here
                              </p>
                          </div>
                      ) : (
                          <div className="mt-4 space-y-2">
                              {cart.map((item, index) => (
                                  <div>
                                      <div key={index} className="flex justify-between items-center  rounded-lg">
                                          <div className='flex flex-col gap-2'>
                                              <p className="text-preset-4-bold text-color-rose-900">{item.dessert.name}</p>
                                              <div className='text-preset-4-bold text-color-rose-400 flex flex-row gap-4' >
                                                  <p className=" text-color-red">
                                                      {item.quantity}x
                                                  </p>
                                                  <p className='text-preset-4'>@ ${item.dessert.price.toFixed(2)} </p>
                                                  <p>${(item.dessert.price * item.quantity).toFixed(2)}</p>
                                              </div>
                                          </div>
                                          <button
                                              onClick={() => removeFromCart(item.dessert.name)}
                                              className="group transition-all"
                                          >
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 20 20"
                                                  className="fill-[#AD8A85] group-hover:fill-black transition-colors duration-200"
                                              >
                                                  <path d="M10 1.25A8.696 8.696 0 0 0 1.25 10 8.696 8.696 0 0 0 10 18.75 8.696 8.696 0 0 0 18.75 10 8.696 8.696 0 0 0 10 1.25Zm0 16.25c-4.125 0-7.5-3.375-7.5-7.5S5.875 2.5 10 2.5s7.5 3.375 7.5 7.5-3.375 7.5-7.5 7.5Z"/>
                                                  <path d="M13.375 14.375 10 11l-3.375 3.375-1-1L9 10 5.625 6.625l1-1L10 9l3.375-3.375 1 1L11 10l3.375 3.375-1 1Z"/>
                                              </svg>
                                          </button>


                                      </div>

                                      <div className="h-0.5 w-full mt-4 bg-color-rose-100" />
                                  </div>


                              ))}
                                <div  className="flex justify-between items-center mt-4">
                                    <p className="text-preset-4 text-color-rose-900">Order Total</p>
                                    <p className="text-preset-2 text-color-rose-900">
                                        ${cart.reduce((total, item) => total + item.dessert.price * item.quantity, 0).toFixed(2)}
                                    </p>
                                </div>
                              <div className='flex flex-row items-center justify-center py-4 gap-4 mt-4 bg-color-rose-50 rounded-lg '>
                                  <img src='public/images/icon-carbon-neutral.svg' alt='null'/>
                                  <p className='text-preset-4 text-color-rose-900'>
                                      This is a <span className="text-preset-4-bold">carbon-neutral</span> delivery.
                                  </p>
                              </div>
                              <ConfirmOrderButton />

                          </div>
                      )}
                  </div>
              </div>
          </div>

      </div>
  )


}

export default App
