import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Features from "./components/features.jsx";
import Articles from "./components/articles.jsx";
import Footer from "./components/footer.jsx";
import HeroMobile from "./components/hero-mobile.jsx";


export const App = () => (
    <div className="font-publicSans">
        <Navbar/>
        <div className="hidden lg:block">
            <Hero/>
        </div>
        <div className="block lg:hidden">
            <HeroMobile/>
        </div>
        <Features/>
        <Articles/>
        <Footer/>
    </div>
);
