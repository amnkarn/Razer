
interface PopularCard {
    heading: string, 
    label1: string, 
    label2: string, 
    label3: string, 
    label4: string, 
    label5: string
}

export default function PopularCardStruct(props: PopularCard) {
    return (
        <div className="h-75 w-120 border border-gray-500 text-white flex flex-col items-center py-5">
            <h2 className="text-3xl">{props.heading}</h2>

            <ul className="py-5 px-7 font-medium text-wrap">
                <li className="flex items-center gap-3 pt-1"> 
                    <div className="text-3xl font-bold h-1.5 w-1.5  rounded-2xl bg-white"></div>
                    <p>{props.label1}</p>
                </li>
                <li className="flex items-center gap-3 pt-1"> 
                    <div className="text-3xl font-bold h-1.5 w-1.5  rounded-2xl bg-white"></div>
                    <p>{props.label2}</p>
                </li>
                <li className="flex items-center gap-3 pt-1"> 
                    <div className="text-3xl font-bold h-1.5 w-1.5  rounded-2xl bg-white"></div>
                    <p>{props.label3}</p>
                </li>
                <li className="flex items-center gap-3 pt-1"> 
                    <div className="text-3xl font-bold h-1.5 w-1.5  rounded-2xl bg-white"></div>
                    <p>{props.label4}</p>
                </li>
                <li className="flex items-center gap-3 pt-1"> 
                    <div className="text-3xl font-bold h-1.5 w-1.5  rounded-2xl bg-white"></div>
                    <p>{props.label5}</p>
                </li>
            </ul>
        </div>
    )
}