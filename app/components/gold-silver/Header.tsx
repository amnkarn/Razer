

export default function Header() {

    return (
        <div className="w-full h-15 flex items-center justify-evenly px-25 border-b-2 border-green-600">
            <div className="text-gray-300 hover:text-white">
                <img
                    src="https://media.gold.razer.com/goldweb/site/images/logo/razer-gold-silver.png"
                    alt="logo"
                    className="h-8"
                />
            </div>

            <HeaderElems label="Shop" />
            <HeaderElems label="Rewards" />
            <HeaderElems label="Promotions" />

            <div className="flex gap-8">
                <div className="flex items-center border border-gray-900 px-2 bg-[#222222]">
                    <span className="material-symbols-outlined text-gray-200">search</span>
                    <input type="text" className="pr-16 pl-5 py-2 outline-none text-sm text-gray-200" placeholder="Search gold.razer.com" />
                </div>

                <div className="flex gap-3">
                    <button className="bg-[#7CE26C] text-xs font-semibold text-black px-4  rounded-sm">LOG IN</button>

                    <button className="flex gap-1 px-4  text-xs border border-gray-400 items-center font-semibold rounded-sm text-white">
                        <span className="material-symbols-outlined text-sm!">language</span>
                        US
                    </button>
                </div>
            </div>
        </div>
    )
}

function HeaderElems({ label }: { label: string }) {
    return (
        <div className="text-gray-300 hover:text-white cursor-pointer">
            {label}
        </div>
    )
}