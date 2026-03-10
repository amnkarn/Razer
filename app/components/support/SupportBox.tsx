
export default function SupportBox() {
    return (
        <div className="bg-black flex items-center justify-center py-15 gap-20">
            <SupportBoxStruc
                localImg="../../insider.svg"
                heading="Razer Insider"
                paragraph="Have a question? Ask the Razer Community for help! (English only)"
                buttonText="ENTER INSIDER"
                paddingRight={true}
            />
            <SupportBoxStruc
                localImg="../../questionMark.svg"
                heading="NEED HELP?"
                paragraph="Get prompt support from our team"
                buttonText="CONTACT SUPPORT"
            />
        </div>
    )
}

interface Support {
    localImg: string,
    heading: string,
    paragraph: string,
    buttonText: string,
    paddingRight?: boolean
}

function SupportBoxStruc(props: Support) {
    return (
        <div className={`flex flex-col items-center gap-3 pr-5 ${props.paddingRight && "border-r border-zinc-200"} `}>
            <img src={props.localImg} alt="inside" />
            <h2 className="text-2xl text-green-400">{props.heading}</h2>
            <p className="text-gray-300 text-sm">{props.paragraph}</p>

            <button className="px-8 py-2 rounded-md mt-1 border-2 text-xl font-semibold text-green-400 border-green-600">
                {props.buttonText}
            </button>
        </div>
    )
}