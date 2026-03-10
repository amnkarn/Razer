import { ReactNode } from "react"

interface IconInterfase {
    googleIcon?: string,
    fontIcon?: ReactNode,
    label: string,
    image?: string
}

export default function Icon({googleIcon, fontIcon, label, image}: IconInterfase) {
    return (
        <div className="flex flex-col items-center text-center w-20 py-3 text-gray-400  hover:text-green-500 cursor-pointer">
            { googleIcon && 
                <span className="material-symbols-outlined text-7xl! text-white">{googleIcon}</span>
            }

            { fontIcon&& 
                <span></span>
            }

            { image && 
                <img src={image} alt="icon" className="h-17" />
            }
            
            <p className="text-sm">{label}</p>
        </div>
    )
}