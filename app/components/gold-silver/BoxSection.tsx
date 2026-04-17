

export function BoxSection() {
    const popularGames = [
        {
            name: "Nintendo eShop",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/nintendo-eshop-us/attachment/GUYTE6BVGEZA====.jpg"
        }, {
            name: "Nintendo Switch Online Membership",
            img: "../../gold-silver/img2.png",
            tag1: "NEW"
        }, {
            name: "Xbox",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/xbox-gift-card/attachment/PBRG66BNM5UWM5DDMFZGI===.jpg"
        }, {
            name: "Roblox",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/roblox/attachment/OJXWE3DPPA======.jpg"
        },
    ]

    const featuredGames = [
        {
            name: "Sunderfolk",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/sunderfolk/attachment/INXXA6JAN5TCAU3VNZSGK4TGN5WGWX2SMF5GK4S7I5XWYZCXMVRF6VDIOVWWE3TBNFWF6NJRGJ4DKMJS.png",
            tag1: "NEW"
        }, {
            name: "Clair Obscur: Expedition 33",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/clair-obscur-expedition-33/attachment/GUYTE6BVGEZA====.jpg",
            tag1: "NEW"
        }, {
            name: "LAST CLOUDIA",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/last-cloudia/attachment/NRQXG5DDNRXXKZDJMFPXI2DVNVRF6R2MGFPXAYY=.png",
            tag1: "NEW",
            tag2: "PROMO"
        }, {
            name: "PUBG Mobile",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/pubg-mobile-uc-code/attachment/HKPUBGMOBILE.webp",
            tag1: "PROMO"
        }, {
            name: "Trove (PC)",
            img: "https://media.gold.razer.com/goldweb/content/catalogs/gold/trove/attachment/MRSXG23UN5YCA5TJMV3V6NJRGIQHQIBVGEZA====.jpg",
            tag1: "NEW"
        }
    ]

    return (
        <div className="w-full flex gap-8 items-center justify-center mt-10">
            <Box
                label="POPULAR"
                games={popularGames}
            />

            <Box
                label="FEATURED"
                games={featuredGames}
            />
        </div>
    )
}

interface Games {
    name: string,
    img: string,
    tag1?: string,
    tag2?: string
}

function Box({ label, games }: { label: string, games: Games[] }) {
    return (
        <div className="text-white w-[35%] h-87.5 border-b-2 border-[#FFB400] rounded-lg px-5 py-5 bg-[#222222]">

            <div className="flex items-center justify-between">
                <h3 className="text-[#FFB400] text-xl font-extrabold">{label}</h3>
                <p className="flex items-center gap-3">
                    View All
                    <span className="material-symbols-outlined text-xs! text-[#FFB400] font-bold!">arrow_forward_ios</span>
                </p>
            </div>

            <div className="flex w-full flex-wrap pt-2">
                {games.map(game => (
                    <div className="flex gap-2 py-1 w-[50%]" key={game.name}>

                        <div className="border border-gray-900 rounded-lg overflow-hidden shrink-0 group">
                            <img 
                                src={game.img} 
                                className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-400" 
                                alt="" 
                            />
                        </div>

                        <div className="flex flex-col justify-evenly">
                            <p className="text-sm pr-10">{game.name}</p>

                            <div className="flex gap-2">
                            {game.tag1 && (
                                <span className="px-2 bg-green-500 text-[12px] text-black font-bold">
                                    {game.tag1}
                                </span>
                            )}

                            {game.tag2 && (
                                <span className="px-2 bg-green-500 text-[12px] text-black font-bold">
                                    {game.tag2}
                                </span>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}