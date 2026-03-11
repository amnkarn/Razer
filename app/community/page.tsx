import Navbar from "../components/Navbar"
import Notification from "../components/Notification"

export default function Community() {
    return (
        <div className="bg-black w-full h-screen">
            <header>
                <Navbar position="fixed" />
            </header>
            <main>
                <Filter />
                <Notification msg="Razer Members Week: Earn up to US$80 return credit plus 30% off Razer.com codes for maximum savings on gaming gear. " />

                <Hero />
            </main>
            
            <footer></footer>
        </div>
    )
}

function Filter() {
    return (
        <div className="w-full h-25 bg-zinc-900 flex items-center justify-center gap-8 border-b border-green-500 pt-2">
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-blog.svg"
                label="Blog"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-razerstreamer.svg"
                label="#RazerCreator"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-esports.svg"
                label="Team Razer"
            />

            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-events.svg"
                label="Events"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-sustainability.svg"
                label="Sustainability"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-wallpapers.svg"
                label="Wallpapers"
            />
            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-stickers.svg"
                label="Stickers"
            />

            <FilterStruct
                url="https://assets2.razerzone.com/images/main-menu/icons/icon-developers.svg"
                label="Developers"
            />

        </div>
    )
}

function FilterStruct({url, label}: {url: string, label: string}) {
    return (
        <div className="text-white flex flex-col justify-center items-center text-2xl">
            <img src={url} width={35} alt="" />
            <p className="text-sm pt-1">{label}</p>
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