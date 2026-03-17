"use client"
import { useState } from "react"


export default function BottomBanner() {
    interface Banner {
        img: string,
        label: string,
        facebook?: boolean,
        insta?: boolean,
        x?: boolean,
        thread?: boolean
    }
    const banner: Banner[] = [
        {
            img: "./community/bottom-banner-1.webp",
            label: "Razer Gold",
            facebook: true,
            insta: true
        },
        {
            img: "./community/bottom-banner-2.webp",
            label: "Team Razer",
            facebook: true,
            insta: true,
            x: true,
            thread: true
        },
        {
            img: "./community/bottom-banner-3.webp",
            label: "CEO, CHIEF GAMER, FATHER OF SNEKI",
            facebook: true,
            insta: true,
            x: true,
            thread: true
        }
    ]
    const [slideIdx, setSlideIdx] = useState(0)

    function prevSlide() {
        setSlideIdx((prev) => prev === 0 ? banner.length - 1 : prev - 1)
    }

    function nextSlide() {
        setSlideIdx((next) => next === banner.length - 1 ? 0 : next + 1)
    }

    return (
        <div className="w-full bg-black flex justify-center items-center py-25 group relative">
            <BannerStruct  data={banner[slideIdx]} prevSlide={prevSlide} nextSlide={nextSlide}/>
        </div>
    )
}

interface Banner {
    img: string,
    label: string,
    facebook?: boolean,
    insta?: boolean,
    x?: boolean,
    thread?: boolean
}

function BannerStruct({data, prevSlide, nextSlide}: {data: Banner, prevSlide: () => void, nextSlide: () => void,}) {
    return (
        <div className="max-w-[1200] overflow-hidden object-cover relative">
            <span className="material-symbols-outlined text-green-500 text-7xl! cursor-pointer opacity-0 group-hover:opacity-100 absolute top-[20%]" onClick={prevSlide}>
                arrow_back_ios
            </span>

            <img src={data.img} alt="" className="w-full" />
            <div className="w-80 absolute top-[30%] left-[60%]">
                <h4 className="text-white text-2xl uppercase font-bold">{data.label}</h4>
                <div className="flex py-5 text-green-600 gap-5">
                    { data.facebook && <i className="fa-brands fa-facebook text-3xl"></i>}
                    { data.insta && <i className="fa-brands fa-instagram text-3xl"></i>}
                    {data.x && <i className="fa-brands fa-x-twitter text-3xl"></i>}
                    { data.thread && <i className="fa-brands fa-threads text-3xl"></i>}
                </div>
            </div>

            <span className="material-symbols-outlined text-green-500 text-7xl! cursor-pointer opacity-0 group-hover:opacity-100 absolute top-[20%] right-0" onClick={nextSlide}>
                arrow_forward_ios
            </span>
        </div>
    )
}