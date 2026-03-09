import { ReactNode } from "react"


export default function Footer() {
    return (
        <div className="bg-black border-t-7 border-gray-800 w-full px-38 justify-between">
            
            <div className="h-110 grid grid-cols-[repeat(6,1.5fr)_2fr] grid-rows-[1fr_auto] gap-x-2 pt-5 text-gray-300">

                <div className="h-70 flex flex-col text-xs font-bold px-3 gap-y-3">
                    <h4>Shop</h4>
                    <FooterText label="RazerStores" />
                    <FooterText label="RazerCafe" />
                    <FooterText label="Store Locator" />
                    <FooterText label="Purchase Programs" />
                    <FooterText label="Bulk Order Program" />
                    <FooterText label="Education" />
                    <FooterText label="Only at Razer" />
                    <FooterText label="Razer Silver Rewards" />
                    <FooterText label="Affiliate" />
                    <FooterText label="Newsletter" />
                </div>
                
                <div className="h-70 flex flex-col text-xs font-bold px-3 gap-y-3">
                    <h4>Explore</h4>
                    <FooterText label="Technology" />
                    <FooterText label="Chroma RGB" />
                    <FooterText label="Concepts" />
                    <FooterText label="Esports" />
                    <FooterText label="Collabs" />
                </div>

                <div className="h-70 flex flex-col text-xs font-bold px-3 gap-y-3">
                    <h4>Support</h4>
                    <FooterText label="Get Help" />
                    <FooterText label="Registration & Warranty" />
                    <FooterText label="RazerStore Support" />
                    <FooterText label="RazerCare" />
                    <FooterText label="Manage Razer ID" />
                    <FooterText label="Support Videos" />
                    <FooterText label="Recycling Program" />
                    <FooterText label="Accessibility Statement" />
                </div>

                <div className="h-70 flex flex-col text-xs font-bold px-3 gap-y-3">
                    <h4>Company</h4>
                    <FooterText label="About us" />
                    <FooterText label="Carrers" />
                    <FooterText label="Newsroom" />
                    <FooterText label="zVentures" />
                    <FooterText label="Contact Us" />
                    <FooterText label="AI Gaming Newsletter" />
                </div>

                <div className="h-70 flex flex-col text-xs font-bold px-3 gap-y-1.5">
                    <h4>Follow  s</h4>

                    <StyleWrap>
                        <i className="fa-brands fa-facebook"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-instagram"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-threads"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-x-twitter"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-youtube"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-tiktok"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-twitch"></i>
                    </StyleWrap>
                    <StyleWrap>
                        <i className="fa-brands fa-discord"></i>
                    </StyleWrap>
                </div>

                <div></div>

                <div className="h-70">
                    <h3 className="pt-3 pl-6 text-green-500 text-sm">FOR GAMERS. BY GAMERS.™</h3>
                </div>

                <div className="col-span-7 h-15 border-t border-white flex gap-x-10 text-xs text-gray-400 items-center">
                    <p>Copyright © 2026 Razer Inc. All rights reserved.</p>
                    <a href="" className="border-r border-white pr-4 hover:underline">Site Map</a>
                    <a href="" className="border-r border-white pr-4 hover:underline">Legal Terms</a>
                    <a href="" className="border-r border-white pr-4 hover:underline">Privacy Policy </a>
                    <a href="" className="border-r border-white pr-4 hover:underline">Cookie Settings</a>
                </div>
            </div>
        </div>
    )
}

function FooterText({label}: {label: string}) {
    return (
        <a href="" className="opacity-80 hover:underline hover:opacity-100">{label}</a>
    )
}

function StyleWrap({children}: {children: ReactNode}) {
    return (
        <div className="text-xl scale-100 hover:scale-110 transition-transform opacity-80">
            {children}
        </div>
    )
}