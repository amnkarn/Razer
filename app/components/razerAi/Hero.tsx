

export default function Hero() {
    return (
        <div className="overflow-hidden object-cover relative">
            <img src="https://www.razer.ai/wp-content/uploads/2025/11/homepage-kv-bg-01-lossy.webp"/>

            <div className="absolute top-[25%] left-[30%] max-w-150 text-white z-5">
                <h1 className="text-7xl uppercase text-center font-extrabold font-razer tracking-wider">The future of gaming is AI</h1>
            </div>

            <div className="absolute top-[52%] left-[40%] flex gap-6 z-5">
                <button className="flex px-5 py-2 bg-green-500 rounded-lg gap-2 items-center cursor-pointer">
                    Book a Demo
                    <span className="material-symbols-outlined text-sm! font-bold! pt-1">call_made</span>
                </button>

                <button className="flex px-5 py-2 border-2 border-green-500 rounded-lg gap-2 items-center cursor-pointer text-green-500">
                    More Info
                    <span className="material-symbols-outlined text-sm! font-bold! pt-1">call_made</span>
                </button>
            </div>
        </div>
    )
}