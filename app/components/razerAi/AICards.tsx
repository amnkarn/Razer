

export default function AICards() {
    return (
        <div className="bg-black py-20 px-[13%]">
            <div className="">
                <div className="py-10 px-5 text-white">
                    <h2 className="text-4xl font-semibold">AI HARDWARE</h2>
                    <p className="text-lg text-zinc-300 py-3 font-medium">Designed to enhance your work, play, and life</p>
                </div>

                <div className="flex w-full justify-evenly">
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/12/project-ava.png"
                        label="RAZER AVA"
                        desc="Brought to life as an animated 5.5″ 3D hologram or an on-screen character, AVA is your AI desktop companion, featuring a dynamic personality that learns and evolves based on your interactions."
                    />
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/12/project-motoko.png"
                        label="PROJECT MOTOKO"
                        desc="Live smart and experience the future of wearable AI with our wireless AI vision headset, powered by Snapdragon and universally compatible with leading AI solutions."
                    />
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/12/forge-ai-dev-workstation.png"
                        label="RAZER FORGE AI DEV WORKSTATION"
                        desc="Engineered for demanding AI workloads with multi-GPU power, massive memory capacity and high-speed interconnects essential for deep learning."
                    />
                </div>
            </div>

            <div className="mt-25">
                <div className="py-10 px-5 text-white">
                    <h2 className="text-4xl font-semibold">AI DEVELOPER TOOLS</h2>
                    <p className="text-lg text-zinc-300 py-3 font-medium">Build faster, smarter and easier</p>
                </div>

                <div className="flex w-full justify-evenly">
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/10/QA-Companion.png"
                        label="Razer QA Companion-AI"
                        desc="Your AI companion that detects bugs, crashes, and performance issues – cutting QA time by 50% so you can launch your game faster."
                    />
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/10/Game-Co-AI-01.png"
                        label="Razer Game Companion-AI"
                        desc="An AI game assistant delivering real-time expert advice, tailored guidance, and post-game analysis, enhancing gameplay experience like never before."
                    />
                    <Card 
                        img="https://www.razer.ai/wp-content/uploads/2025/12/AIKit-homepage.png"
                        label="RAZER AIKIT"
                        desc="The open-source tool built to run LLMs locally over a single or cluster of GPUs."
                    />
                </div>
            </div>
        </div>
    )
}

function Card({img, label, desc}: {img: string, label: string, desc: string}) {
    return (
        <div className="w-90 px-2 shadow-lg  hover:shadow-amber-100 cursor-pointer">
            <div className="overflow-hidden object-cover">
                <img src={img} className="w-87"/>
            </div>

            <h3 className="text-white text-2xl py-3">{label}</h3>
            <p className="text-white font-medium text-zinc-300">{desc}</p>
        </div>
    )
}