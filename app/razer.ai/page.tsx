import AICards from "../components/razerAi/AICards";
import Hero from "../components/razerAi/Hero";
import AINav from "../components/razerAi/navbar";
import NewSec from "../components/razerAi/NewsSection";


export default function RazerAi() {
    return (
        <div className="w-full bg-black">
            <header className="fixed w-full">
                <AINav />
            </header>

            <main className="pt-17">
                <Hero />
                <AICards />
                <NewSec />

            </main>

            <footer></footer>
        </div>
    )
}