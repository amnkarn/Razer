import Footer from "../components/Footer";
import BottomCover from "../components/gold-silver/BottomCover";
import { BoxSection } from "../components/gold-silver/BoxSection";
import FeaturesReward from "../components/gold-silver/FeatureReward";
import Header from "../components/gold-silver/Header";
import Hero from "../components/gold-silver/HeroSection";


export default function GoldSilver() {
    return (
        <div className="w-full bg-black font-mont">
            <header className="w-full">
                <Header />
            </header>

            <main className="">
                <Hero />
                <BoxSection />
                <FeaturesReward />
                <BottomCover />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}