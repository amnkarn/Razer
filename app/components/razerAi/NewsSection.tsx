

export default function NewSec() {
    return (
        <div className=" bg-black px-50 ">
            <h2 className="text-4xl text-white font-semibold">LATEST NEWS</h2>

            <div className="py-10">
                <NewsStruct
                    date="March 9, 2026"
                    news="Razer Unveils AI-Powered Future of Play at GDC 2026"
                    img="https://www.razer.ai/wp-content/uploads/2026/03/Razer-AVA-KV-1920-x-1080-1024x576.png"
                />
                <NewsStruct
                    date="March 9, 2026"
                    news="AI That Plays to Test: Razer QA Companion-AI at GDC 2026"
                    img="https://www.razer.ai/wp-content/uploads/2026/03/QA-Companion-Blog-KV-v2-1024x576.png"
                />
                <NewsStruct
                    date="March 9, 2026"
                    news="Razer AVA Goes Agentic: A New Chapter at GDC 2026 "
                    img="https://www.razer.ai/wp-content/uploads/2026/03/Razer-AVA-EDM-KV-v2.png"
                />
                <NewsStruct
                    date="March 9, 2026"
                    news="Razer AI at GDC 2026: From Early Concepts to Applied Systems"
                    img="https://www.razer.ai/wp-content/uploads/2026/03/1080x567.png"
                />
                <NewsStruct
                    date="February 4, 2026"
                    news="Human Creativity Should Be Augmented by AI, Not Replace It: Razer’s Perspective on the Future of Gaming"
                    img="https://www.razer.ai/wp-content/uploads/2026/02/The-Future-of-Gaming-is-AI-II-1-1255x702-1.webp"
                />
            </div>
        </div>
    )
}

function NewsStruct({date, news, img}: {date: string, news: string, img: string}) {
    return (
        <div className="flex justify-between px-5 w-full border-t-2 border-zinc-500">
            <div className="space-y-20 py-10 max-w-[55%]">
                <div>
                    <p className="text-zinc-400 ">{date}</p>
                    <h4 className="text-white text-2xl pt-5">{news}</h4>
                </div>

                <button className="flex px-5 py-2 ring ring-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-sm gap-2 items-center cursor-pointer place-self-end">
                    Read
                    <span className="material-symbols-outlined text-sm! font-bold! pt-1">call_made</span>
                </button>
            </div>
            <div className="overflow-hidden object-cover py-5">
                <img src={img} className="w-110 object-cover object-center" />
            </div>
        </div>
    )
}