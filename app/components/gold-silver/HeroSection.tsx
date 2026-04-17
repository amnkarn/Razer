"use client"
import { useEffect, useState } from "react"


export default function Hero() {
    const images = [
        {
            img: 'https://media.gold.razer.com/goldweb/content/home/banners/69d4d72ab5573964cfb4420f/GE4TEMDYGUYDAX2HMVXHG2DJNYQES3LQMFRXIICMOVXGCICJKY======.jpg',
            label1: "GENSHIN IMPACT LUNA VI PHASE 1 REBATE",
            label2: "Use promo code SE10 for 10% cashback with your Razer Gold wallet"
        },
        {
            img: 'https://media.gold.razer.com/goldweb/content/home/banners/69d5fb2e443149f8ecf2e433/GE4TEMDYGUYDA===.jpg',
            label1: "LAST CLOUDIA ANNIVERSARY PROMOTION",
            label2: "Use promo code LCANNI for 10% cashback and in-game items"
        },
        {
            img: 'https://media.gold.razer.com/goldweb/content/home/banners/69c6bc8f3b9d959ec0259d11/GE4TEMDYGUYDAX2TOVXGIZLSMZXWY2Y=.jpg',
            label1: "SUNDERFOLK PATCH 2.0 IS LIVE",
            label2: "New tactical depths, same legendary teamwork—Patch 2.0 has arrived"
        }
    ]

    const [idx, setIdx] = useState(0);

    function onPrev() {
        setIdx(() => (
            idx===0 ? 2 : idx-1
        ));
    }

    function onNext() {
        setIdx(() => (
            idx===2 ? 0 : idx+1
        ));
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            onNext();
        }, 5000)

        return () => clearTimeout(interval);
    }, [idx])

    return (
        <div className="h-137.5 w-full">

            <Banner props={images[idx]} idx={idx} onPrev={onPrev} onNext={onNext} />


        </div>
    )
}

interface Banner {
    img: string,
    label1: string,
    label2: string
}

function Banner({ props, idx, onPrev, onNext }: { props: Banner, idx: number, onPrev: () => void, onNext: () => void }) {
    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className="h-122.5">
                <img
                    src={props.img}
                    alt="Banner"
                    className="h-full w-full object-cover "
                />
            </div>

            <PrevSlide onPrev={onPrev} />
            <NextSlide onNext={onNext} />

            <div className="absolute inset-0 shadow-[inset_0_-280px_120px_-100px_#111]"></div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <h4 className="text-white font-sans pb font-semibold">{props.label1}</h4>
                <h1 className="text-green-500 text-2xl">{props.label2}</h1>

                <SlideNo idx={idx} />
            </div>

        </div>
    )
}

function SlideNo({ idx }: { idx: number }) {
    return (
        <div className="flex items-center gap-6 mt-5">
            <span className="material-symbols-outlined text-white">play_arrow</span>

            <div className={`h-3 w-3 rounded-full cursor-pointer ${idx === 0 ? "bg-green-500" : "bg-gray-500"}`}></div>
            <div className={`h-3 w-3 rounded-full cursor-pointer ${idx === 1 ? "bg-green-500" : "bg-gray-500"}`}></div>
            <div className={`h-3 w-3 rounded-full cursor-pointer ${idx === 2 ? "bg-green-500" : "bg-gray-500"}`}></div>
        </div>
    )
}

function PrevSlide({ onPrev }: { onPrev: () => void }) {
    return (
        <div className="absolute top-[50%] left-0 -translate-y-1/2 text-white py-70 pl-10 pr-20 z-20 opacity-0 hover:opacity-100">
            <span className="material-symbols-outlined cursor-pointer" onClick={onPrev}>arrow_back_ios</span>
        </div>
    )
}


function NextSlide({ onNext }: { onNext: () => void }) {
    return (
        <div className="absolute top-[50%] right-0 -translate-y-1/2 text-white py-70 pl-10 pr-20 z-20 opacity-0 hover:opacity-100">
            <span className="material-symbols-outlined cursor-pointer" onClick={onNext}>arrow_forward_ios</span>
        </div>
    )
}