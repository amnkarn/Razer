"use client"
import { useRouter } from "next/navigation"


export default function AINav() {
    const router = useRouter();

    return (
        <div className="bg-black h-17 w-full flex items-center justify-evenly gap-16 py-7 border-b-2 font-mont">
            <div className="pr-5 cursor-pointer" onClick={() => router.push("/")}>
                <img src="https://www.razer.ai/wp-content/uploads/2025/09/razer-ai-logo.png" alt="" className="w-13" />
            </div>

            <ul className="text-white gap-8 flex">
                <li className="hover:border-b-3 hover:border-green-400 cursor-pointer">Products</li>
                <li className="hover:border-b-3 hover:border-green-400 cursor-pointer">About</li>
                <li className="hover:border-b-3 hover:border-green-400 cursor-pointer">Newsroom</li>
                <li className="hover:border-b-3 hover:border-green-400 cursor-pointer">Documentation</li>
            </ul>
            
            <button className="flex px-5 py-2 bg-green-500 rounded-sm gap-2 items-center">
                Book a Demo
                <span className="material-symbols-outlined text-sm! font-bold! pt-1">call_made</span>
            </button>
        </div>
    )
}