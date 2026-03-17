export default function CommunityNews() {
    return (
        <div className="w-full bg-black py-5 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-semibold uppercase">What's Happening on our Community</h1>

            <div className="flex w-full py-10 px-40 overflow-x-auto scrollbar-hide">
                <Container 
                    img="./community/razer-1.webp"
                    heading="Advent Calendar 2025"
                    desc="We’re kicking off 12 days of festive fun to celebrate the community that powers us."
                />
                <Container 
                    img="./community/razer-2.webp"
                    heading="20th  Anniversary Celebration"
                    desc="Take a trip down memory lane and share your favorite Razer moments with us."
                />
                <Container 
                    img="./community/razer-3.webp"
                    heading="Razer Training Lab"
                    desc="Test your skills and win big by playing our custom-designed Counter-Strike 2 map."
                />
                <Container 
                    img="./community/razer-4.webp"
                    heading="We Play To Win"
                    desc="When handed over to development, disregard the rounded corners as they will be handled through coding."
                />
            </div>
        </div>
    )
}

interface CommNews {
    img: string,
    heading: string,
    desc: string
}

function Container({img, heading, desc}: CommNews) {
    return (
        <div>
            <div className="w-180 pb-10 object-cover overflow-hidden hover:scale-102 transition-transform">
                <img src={img} className="w-170 rounded-2xl" alt="" />
            </div>

            <div className="text-white px-5">
                <div className="py-5">
                    <h3 className="text-2xl uppercase font-medium">{heading}</h3>
                    <p className="text-gray-400 text-lg text-wrap">{desc}</p>
                </div>
                <div className="pt-10">
                    <a href="" className="text-green-400 text-lg hover:underline">Learn More {">"}</a>
                </div>
            </div>
        </div>
    )
}