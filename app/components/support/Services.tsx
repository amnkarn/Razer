
export function Services() {
    const label1: string[] = [
        "Warranty FAQ", "Product Registration", "RMA Status"
    ]
    const label2: string[] = [
        "Shipping Guide", "Returns & Refunds", "Razer Advantage"
    ]
    const label3: string[] = [
        "View/Update Support Case", "Get System Recovery Image", "7.1 Surround Sound Activation Code", "Virtual Ring Light Activation Code"
    ]
    const label4: string[] = [
        "RazerCare Protection Plan", "Replacement Parts"
    ]

    return (
        <div className="bg-gray-900 flex justify-center py-10">
            <ServicesStructure heading="Registration & Warranty" labels={label1} rightBorder={true} />
            <ServicesStructure heading="Online Store" labels={label2} rightBorder={true} />
            <ServicesStructure heading="Online Services & Resources" labels={label3} rightBorder={true} />
            <ServicesStructure heading="RazerCare" labels={label4} />
        </div>
    )
}


function ServicesStructure({heading, labels, rightBorder}: {heading: string, labels: string[], rightBorder?: boolean}) {
    return (
        <div className={`text-white px-5 flex flex-col ${rightBorder ? 'border-r border-gray-600' : ''}`}>

            <h3 className="text-xl font-medium">{heading}</h3>
            
            { labels.length > 0 && 
                labels.map(label => (
                    <div className="py-1.5 text-gray-300 text-sm flex gap-2 cursor-pointer" key={label}>
                        <h3 className="hover:text-green-500">{label}</h3>
                        <span className="text-green-500"> {">"} </span>
                    </div>
                ))
            }
        </div>
    )
}