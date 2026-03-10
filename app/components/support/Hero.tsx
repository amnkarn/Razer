
export default function Hero() {
    return (
        <div className="overflow-hidden relative">
            <img src="https://assets.razerzone.com/support/images/new/home_search_bg.jpg" alt="hero" className="w-full object-top scale-110 h-100" />

            <div className="absolute top-25 left-2/7 text-white flex flex-col items-center">
                <h2 className="text-4xl">Welcome to Razer Support</h2>
                <h4 className="text-2xl text-zinc-400 pt-5">We’re here to help</h4>

                <div className="border border-gray-300 gap-2 pl-2 pr-100 py-2 flex items-center mt-7 active:border-2 active:border-green-600">
                    <span className="material-symbols-outlined opacity-70">search</span>
                    <input type="text" placeholder="Search Support" className="outline-0 text-xl" />
                </div>
            </div>
        </div>
    )
}