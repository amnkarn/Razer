import Filter from "../components/community/CommunityFilter"
import NewsFeedSec from "../components/community/NewsFeedSection"
import WelcomeSection from "../components/community/WelcomeSection"
import Navbar from "../components/Navbar"
import Notification from "../components/Notification"

export default function Community() {
    return (
        <div className="bg-black w-full h-screen">
            <header className="fixed w-full z-5">
                <Navbar position="fixed" />
            </header>
            <main className="pt-15">
                <Filter />
                <Notification msg="Razer Members Week: Earn up to US$80 return credit plus 30% off Razer.com codes for maximum savings on gaming gear. " />

                <Hero />
                <WelcomeSection />
                <NewsFeedSec />

            </main>
            
            <footer></footer>
        </div>
    )
}

function Hero() {
    return (
        <div>
            <img src="https://assets2.razerzone.com/images/pnx.assets/8c47b13725a3ac40eaa1a5833bd91114/razer-community-hero.webp" className="w-screen" alt="" />
        </div>
    )
}