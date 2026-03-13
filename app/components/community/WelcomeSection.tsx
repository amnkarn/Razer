

export default function WelcomeSection() {
    return (
        <div className="w-full  bg-black flex flex-col items-center justify-center py-20">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-2/4 flex items-center justify-center text-center">
                    <h1 className="text-7xl font-bold text-[#44D62C] ">WELCOME TO THE RAZER COMMUNITY</h1>
                </div>
                <p className="text-gray-300 w-2/3 py-5 px-20 text-lg text-center">
                    Join millions of gamers worldwide—catch the latest news, enter giveaways, or simply connect with us.
                </p>
                <p className="text-gray-300 w-2/3 px-20 text-lg text-center">
                    Got a setup or fanart to share? Tag us or drop us a DM for a chance to be featured and win Razer gear!
                </p>
            </div>

            <div className="w-full flex flex-col pt-10 items-center gap-y-10">
                <h3 className="text-white text-4xl font-medium">FOLLOW US ON</h3>
                <div className="flex gap-5 pt-5">
                    <img src="./community/facebook.svg" className="w-15" alt="" />
                    <img src="./community/x.svg" className="w-15" alt="" />
                    <img src="./community/instagram.svg" className="w-15" alt="" />
                    <img src="./community/Threads.svg" className="w-15" alt="" />
                    <img src="./community/tiktok.svg" className="w-15" alt="" />
                    <img src="./community/youtube.svg" className="w-15" alt="" />
                    <img src="./community/twitch.svg" className="w-15" alt="" />
                    <img src="./community/discord.svg" className="w-15" alt="" />
                </div>
            </div>
        </div>
    )
}