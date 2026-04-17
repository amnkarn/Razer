

export default function BottomCover() {
    return (
        <div className="w-full flex px-50">
            <div className="w-[40%]">
                <img 
                    src="https://media.gold.razer.com/goldweb/site/images/banner/razer-gold-facebook.png" 
                    alt="" 
                    className=""
                />
            </div>

            <div className="w-[60%] px-10 flex flex-col items-center justify-center]">
                <p className="text-gray-300 text-sm">
                    Epic games. Limited edition in-game content. Exclusive promotions. Follow us on the 
                    <a href="" className="text-white hover:underline">&nbsp;Razer Gold Facebook page</a> to get more back and get rewarded!
                </p>

                <div className="text-white flex items-center gap-5 pt-3">
                    <p className="cursor-pointer text-lg">Like us on Facebook!</p>
                    <img 
                        src="https://media.gold.razer.com/goldweb/site/images/icons/social-media-facebook.png" 
                        alt="" 
                        className="w-8"
                    />
                </div>
            </div>
        </div>
    )
}