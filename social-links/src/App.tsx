
function App() {

    const buttonNames = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];


  return (
    <div className="bg-gray-900 h-screen m-auto text-white flex flex-col items-center justify-center">
      <section className="max-w-sm bg-gray-800 p-6 items-center text-center rounded-md">

          <img src="src/assets/images/avatar-jessica.jpeg" alt="Jessica Randall" className="rounded-full w-24 h-24 m-auto" />
          <h2 className="text-2xl pt-2">
              Jessica Randall
          </h2>
          <p className="text-green">
              London, United Kingdom
          </p>
            <p className="py-6 text-md">
                "Front-end developer and avid reader."
            </p>


         {buttonNames.map((name) => (
  <button key={name} className="w-full bg-gray-700 py-2 rounded-md hover:bg-gray-500 transform active:scale-95 transition-transform mt-2">
    {name}
  </button>
))}

      </section>
    <div className="mt-8">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.linkedin.com/in/agprastyo/" rel="noopener noreferrer" target="_blank">Agprastyo</a>.
 </div>
    </div>
  )
}

export default App

