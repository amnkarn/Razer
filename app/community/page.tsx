import Filter from "../components/community/CommunityFilter"
import CommunityNews from "../components/community/CommunityNews"
import Discover from "../components/community/Discover"
import NewsFeedSec from "../components/community/NewsFeedSection"
import WelcomeSection from "../components/community/WelcomeSection"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NotificationStruct from "../components/Notification"
import BottomBanner from "../components/community/BottomBanner"

export default function Community() {
    return (
        <div className="bg-black w-full h-screen font-mont">
            <header className="fixed w-full z-5">
                <Navbar position="fixed" />
            </header>
            <main className="pt-15">
                <Filter />
                <Notification />
                <Hero />
                <WelcomeSection />
                <NewsFeedSec /> 
                <CommunityNews/>
                <Discover />
                <BottomBanner />
            </main>
            
            <footer>
                <Footer />
            </footer>
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

function Notification() {
    return (
        <NotificationStruct 
            msg="Razer Members Week: Earn up to US$80 return credit plus 30% off Razer.com codes for maximum savings on gaming gear. " 
        />
    )
}