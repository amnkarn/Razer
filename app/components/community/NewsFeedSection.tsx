

export default function NewsFeedSec() {
    return (
        <div className="bg-black w-full pb-10 flex flex-col items-center justify-center gap-y-10">
            <h1 className="text-5xl text-white font-semibold">COMMUNITY NEWSFEED</h1>

            <div className="w-full max-w-365 flex items-center px-13 py-5 group">
                <span className="material-symbols-outlined text-green-500 text-7xl! font-light! cursor-pointer opacity-0 group-hover:opacity-100">arrow_back_ios</span>

                <div className="overflow-x-auto flex-1">
                    <div className="flex flex-nowrap items-center justify-evenly pb-4">
                        <ImgContainer 
                            imageSource="./community/IMG-4.jpg"
                            imageLabel="Community"
                            title="The Silence is Lying to You: Why the Razer BlackShark V3 Pro is the Ultimate Horror Companion"
                        />
                        <ImgContainer 
                            imageSource="./community/img-2.jpg" 
                            imageLabel="TECHNOLOGY" 
                            title="When Games Feel More Alive: Adaptive Immersive Experience at GDC 2026"
                        />
                        <ImgContainer 
                            imageSource="./community/IMG-6.jpg"
                            imageLabel="Community"
                            title="AI That Plays to Test: Razer QA Companion-AI at GDC 2026"
                        />
                    </div>
                </div>

                <span className="material-symbols-outlined text-green-500 text-7xl! font-light! cursor-pointer opacity-0 group-hover:opacity-100">
                    arrow_forward_ios
                </span>
            </div>
        </div>
    )
}

interface ImageDiv {
    imageSource: string, 
    title: string, 
    imageLabel: string
}

function ImgContainer({imageSource, title, imageLabel}: ImageDiv) {
    return (
        <div>
            <div className="shrink-0 w-[calc(33.333%-8px) flex flex-col items-center justify-center w-100 border-2 px-5 cursor-pointer">

                <div className=" bg-yellow-200 relative overflow-hidden">
                    <img
                        src={imageSource}
                        className="h-50.5 w-85 hover:scale-105 object-cover transition-transform"
                        alt=""
                    />
                    <p className="text-black bg-green-400 px-2 font-bold absolute bottom-0 left-0 z-2 uppercase">
                        {imageLabel}
                    </p>
                </div>

                <div className="text-white text-center font-semibold text-[1.75rem] py-2">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}