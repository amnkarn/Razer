

export default function Discover() {
    return (
        <div className="w-full pt-20 bg-black text-white flex flex-col items-center justify-center">
            <div className="w-full flex justify-center px-65 text-center">
                <h2 className="text-5xl font-mont-bold uppercase">Discover Esports, Creators, Developers & More</h2>
            </div>

            <div className="flex flex-wrap gap-5 max-w-[1200] items-center justify-center">
                <DiscoveryDivs 
                    image="./discovery/discovery-1.webp"
                    label="Be a Content Creator with Razer"
                />
                <DiscoveryDivs 
                    image="./discovery/discovery-2.webp"
                    label="Follow our esports journey"
                />
                <DiscoveryDivs 
                    image="./discovery/discovery-3.webp"
                    label="Go Green with Razer"
                />
                <DiscoveryDivs 
                    image="./discovery/discovery-4.webp"
                    label="Develop with Razer Technologies"
                />
                <DiscoveryDivs 
                    image="./discovery/discovery-5.webp"
                    label="Download wallpapers and stickers"
                />
                <DiscoveryDivs 
                    image="./discovery/discovery-6.webp"
                    label="View Our April Fools' Vault"
                />
            </div>
        </div>
    )
}

function DiscoveryDivs({image, label}: {image: string, label: string}) {
    return (
            <div className="rounded-xl mt-10">

                <div className="overflow-hidden object-cover rounded-xl">
                    <img src={image} alt="" className="w-90 hover:scale-108 transition-transform"/>
                </div>

                <div className="w-90 px-5 py-7">
                    <h3 className="text-2xl uppercase font-semibold text-wrap">{label}</h3>

                    <h3 className="text-lg text-green-500 hover:underline font-medium pt-10">Learn More {'>'}</h3>
                </div>
            </div>
    )
}