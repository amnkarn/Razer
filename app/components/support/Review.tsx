"use client"

import { RefObject, useEffect, useRef, useState } from "react";

export default function Review() {
    const slideNo = useRef<number>(1);

    return (
        <div className="bg-zinc-900 flex items-center justify-center">
            { slideNo.current === 1 && 
                <ReviewStruct 
                    review="Amazing customer support, this is why i bought my Razer! Customer for life because of Kyarrah"
                    author="Matt D."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 2 && 
                <ReviewStruct 
                    review="Dave, the agent was very nice and professional. This was my first Razer product ever and contact with the support. If this is how things go at Razer support then you are one of the best so far. Everything went smoothly and professionally. I work in IT as well and this kind of support is rare. Keep up the good work!"
                    author="Sandor S."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 3 && 
                <ReviewStruct 
                    review="Rating: 10 - You were truly one of the best support agents I’ve ever interacted with. Your patience, clear explanations, and willingness to go the extra mile made this experience exceptionally positive. Honestly, you felt like the best support advisor I’ve had in my life. Razer has once again proven why it is one of the best gaming companies in the industry. Not only the product quality, but also the customer support and flexibility in handling issues really stand out. This experience has strengthened my trust in Razer as a premium gaming brand. Thank you again for your outstanding support."
                    author="Christopher D."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 4 && 
                <ReviewStruct 
                    review="Kenneth G. understand how important resolving this issue was for me and he did just that. Some of the best customer service I have had. I hope to run into Kenneth again whenever I need further assistance."
                    author="Matt D."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 5 && 
                <ReviewStruct 
                    review="Beverly was incredibly helpful during my check-in process, great in assisting me to obtain my order information and my requests. Her patience and attentiveness were truly commendable, making her an exceptional agent."
                    author="Jacoboy M."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 6 && 
                <ReviewStruct 
                    review="I've loved Razer since I started gaming, and only you know how you can improve because you get better and better every year! Thank you, Razer, for existing!"
                    author="Matt D."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 7 && 
                <ReviewStruct
                    review="Razer will forever have me as a customer. This experience went completely different compared to what I thought it would be. I thought I would have to go buy a brand new mouse and was pretty upset but the Razer support team helped me get a replacement and walked me through the whole thing and this experience made my day! Thank you Razer and the support people that helped!"
                    author="Abdul A."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 8 && 
                <ReviewStruct 
                    review="The support agent(s) were perfect. Vince especailly helped my in a very polite and effective manner. It is customer service that keeps bringing me back to Razer. My recent purchase of the BlackShark v3 Pros was heavily influenced by the support I have recieved in the past. It looks like a company that cares to invest in their customers to ensure future business. I look forward to the resolution - but regardless of the outcome I would like to say thank you to Vince for his help today."
                    author="Joshep B."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 9 && 
                <ReviewStruct 
                    review="I had an excellent experience with Razer Support. The representative was extremely friendly, professional, and patient throughout the entire process. Everything was explained clearly, and my issue was handled quickly and efficiently. I truly appreciate how smooth and stress-free the whole experience was. This is exactly the level of support you hope for when purchasing a premium product. Thank you for taking care of your customers!"
                    author="Maria A."
                    slideNo={slideNo}
                />
            }

            { slideNo.current === 10 && 
                <ReviewStruct 
                    review="Honestly, I usually hate support chats. But this was an amazing experience – very fast, very helpful, straight to the point, and stress-free; everything was handled calmly and patiently. I couldn't have asked for anything better! Thank you!"
                    author="Annonymous"
                    slideNo={slideNo}
                />
            }
        </div>
    )
}

interface Review {
    review: string,
    author: string,
    slideNo: RefObject<number>
}

function ReviewStruct({review, author, slideNo}: Review) {
    const [slid, setSlide] = useState<number>(1);
    
    useEffect(() => {
        if(slid === 11) setSlide(1)
        if(slid === -1) setSlide(10)
        //console.log(slid);

        if(slideNo) {
            slideNo.current = slid;
        }
        
    }, [slid, slideNo])

    return (
        <div className="w-1/2 h-110 flex flex-col py-10 items-center relative">
            <h1 className="text-white text-3xl">What Our Customers Are Saying</h1>

            <div className="flex text-4xl text-green-500 pt-20 pb-4">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-white text-wrap"> {review} </p>

            <h3 className="text-lg font-semibold text-white pt-5"> {author} </h3>

            <div className=" text-white cursor-pointer hover:text-green-500 absolute top-60 left-[-7] hover:border-2 hover:border-green-400 active:bg-green-700 text-xl py-1.5 px-1.5" onClick={() => setSlide(slid - 1)}>
                <i className="fa-solid fa-angle-left" ></i>
            </div>

            <div className=" text-white cursor-pointer hover:text-green-500 absolute top-60 left-185 hover:border-2 hover:border-green-400 active:bg-green-700 text-xl py-1.5 px-1.5" onClick={(prev) => setSlide(slid + 1)}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    )
}