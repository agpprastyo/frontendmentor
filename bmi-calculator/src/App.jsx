import Hero from "./components/Hero.jsx";
import YourResult from "./components/YourResult.jsx";
import Tips from "./components/Tips.jsx";
import BmiLimitations from "./components/BMILimitations.jsx";


function App() {


    return (
        <div className='bg-pure-white'>
            <Hero/>
            <YourResult/>
            <Tips/>
            <BmiLimitations/>
        </div>
    )
}

export default App
