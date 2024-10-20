function App() {
  return (
      <div className=" font-Outfit w-full h-full lg:bg-Stone100 mx-auto  lg:py-4  ">
          <section className="lg:w-2/5 h-full bg-white mx-auto lg:p-6 lg:rounded-2xl">
              <img src={'/images/image-omelette.jpeg'} alt="Omelette"
                   className="w-full aspect-[6/3] object-cover lg:rounded-xl drop-shadow-sm "/>
              <div className="lg:p-6 p-4">
                  <h1 className="font-YoungSerif text-2xl font-bold mt-4">Simple Omelette Recipe</h1>
                  <p className="text-base text-Gray500 mt-2">An easy and quick dish, perfect for any meal. This classic
                      omelette combines beaten eggs cooked
                      to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                  <div className="flex flex-col items-start mt-6 bg-Rose50 py-6 px-6">
                      <p className="text-Rose800 font-bold text-lg">Preparation time</p>
                      <ul className="list-disc list-inside mt-1">
                          <li className="text-Stone600"><span
                              className="text-Stone900 font-bold">Total:</span> Approximately
                              10 minutes
                          </li>
                          <li className="text-Stone600"><span className="text-Stone900 font-bold">Preparation:</span> 5
                              minutes
                          </li>
                          <li className="text-Stone600"><span className="text-Stone900 font-bold">Cooking:</span> 5
                              minutes
                          </li>

                      </ul>
                  </div>
                  <div className="flex flex-col items-start mt-6 ">
                      <p className="text-Brown800 font-YoungSerif font-bold text-2xl">Ingredients</p>
                      <ul className="list-disc list-inside mt-4">
                          <li className="text-Stone600">2 large eggs</li>
                          <li className="text-Stone600">1 tablespoon butter</li>
                          <li className="text-Stone600">Salt and pepper to taste</li>
                          <li className="text-Stone600">Optional fillings: cheese, vegetables, meats</li>
                      </ul>
                  </div>
                  <div className="w-full h-0.5 bg-Stone100 mt-6"></div>
                  <div className="flex flex-col items-start mt-6">
                      <p className="text-Brown800 font-YoungSerif font-bold text-2xl">Instructions</p>
                      <div className="flex flex-col items-start mt-4">
                          <table className="mt-1 w-full ">
                              <tbody>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">1</td>
                                  <td className="text-Stone600"><span className="font-bold">Beat the eggs:</span> In a
                                      bowl,
                                      beat the eggs with a pinch of salt and pepper until they are well mixed. You can
                                      add a
                                      tablespoon of water or milk for a fluffier texture.
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">2</td>
                                  <td className="text-Stone600"><span className="font-bold">Heat the pan:</span> Place a
                                      non-stick frying pan over medium heat and add butter or oil.
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">3</td>
                                  <td className="text-Stone600"><span
                                      className="font-bold">Cook the omelette:</span> Once
                                      the
                                      butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                                      evenly
                                      coat the surface.
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">4</td>
                                  <td className="text-Stone600"><span
                                      className="font-bold">Add fillings (optional):</span> When the eggs begin to set
                                      at
                                      the
                                      edges but are still slightly runny in the middle, sprinkle your chosen fillings
                                      over
                                      one
                                      half of the omelette.
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">5</td>
                                  <td className="text-Stone600"><span className="font-bold">Fold and serve:</span> As
                                      the
                                      omelette continues to cook, carefully lift one edge and fold it over the fillings.
                                      Let
                                      it cook for another minute, then slide it onto a plate.
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-Stone600 pr-6 align-top">6</td>
                                  <td className="text-Stone600"><span className="font-bold">Enjoy:</span> Serve hot,
                                      with
                                      additional salt and pepper if needed.
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                  <div className="w-full h-0.5 bg-Stone100 mt-6"></div>
                  <div className="flex flex-col items-start mt-6">
                      <p className="text-Brown800 font-YoungSerif font-bold text-2xl">Nutrition</p>
                      <table className="mt-4 w-full">
                          <tbody>
                          <tr className="border-b">
                              <td className="text-Stone600 pr-6 align-top p-4">Calories</td>
                              <td className="text-Stone600 font-bold">277kcal</td>
                          </tr>
                          <tr className="border-b">
                              <td className="text-Stone600 pr-6 align-top p-4">Carbs</td>
                              <td className="text-Stone600 font-bold">0g</td>
                          </tr>
                          <tr className="border-b">
                              <td className="text-Stone600 pr-6 align-top p-4">Protein</td>
                              <td className="text-Stone600 font-bold">20g</td>
                          </tr>
                          <tr className="border-b">
                              <td className="text-Stone600 pr-6 align-top p-4">Fat</td>
                              <td className="text-Stone600 font-bold">22g</td>
                          </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </section>
          <div className="mt-8 text-center ">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a href="https://www.linkedin.com/in/agprastyo/" rel="noopener noreferrer"
                          target="_blank">Agprastyo</a>.
          </div>
      </div>
  )
}

export default App
