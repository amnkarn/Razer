

export default function FeaturesReward() {
    return (
        <div className="w-full px-52 my-10">
            <div className="flex items-center justify-between">
                <h3 className="text-[#30D5FF] text-xl font-extrabold">FEATURED REWARDS</h3>

                <p className="flex items-center gap-3 text-white">
                    View All
                    <span className="material-symbols-outlined text-xs! text-[#30D5FF] font-bold!">arrow_forward_ios</span>
                </p>
            </div>

            <div className="flex pt-5 gap-5">
                <Box
                    img="https://media.gold.razer.com/goldweb/content/catalogs/silver/JZUW45DFNZSG6X3FKNUG64C7KYYV6VKTIQYTA===.jpg"
                    label="Nintendo eShop USD10 Voucher"
                    coin={50000}
                />
                <Box
                    img="https://media.gold.razer.com/goldweb/content/catalogs/silver/GFWW63TUNAWWEYLTNFRQ====.jpg"
                    label="Discord Nitro Basic - 1 Month Subscription"
                    coin={25000}
                />
            </div>
        </div>
    )
}


function Box({ img, label, coin }: { img: string, label: string, coin: number }) {
    return (
        <div className="rounded-lg border-b-2 border-[#30D5FF]">
            <div className="flex">
                <div className="border border-gray-900 rounded-tl-lg overflow-hidden shrink-0 group">
                    <img 
                        src={img} 
                        className="w-20 h-20 object-cover rounded-tl-lg group-hover:scale-105 transition-transform duration-400"
                        alt="img"
                    />
                </div>

                <div className="w-42 text-white px-3 text-xs flex flex-col justify-between py-2 rounded-tr-lg bg-[#1D1D1D]">
                    <p className="">{label}</p>
                    <p className="flex gap-2 text-[#30D5FF]">
                        <img 
                            src="https://media.gold.razer.com/goldweb/site/images/icons/coin_zsilver_no_ths.svg" 
                            className="w-3"    
                            alt="" 
                        />
                        {coin}
                    </p>
                </div>
            </div>

            <div className="pb-5 pt-1 pl-2">
                <span className="px-2 bg-green-500 text-sm font-bold">NEW</span>
            </div>
        </div>
    )
}