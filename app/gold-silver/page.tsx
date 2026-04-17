import Footer from "../components/Footer";
import { BoxSection } from "../components/gold-silver/BoxSection";
import Header from "../components/gold-silver/Header";


export default function GoldSilver() {
    return (
        <div className="w-full bg-black font-mont">
            <header className="w-full">
                <Header />
            </header>

            <main className="">
                <Hero />
                <BoxSection />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

function Hero() {
    return (
        <div className="h-135 w-full border border-white">

        </div>
    )
}