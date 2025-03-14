export default function Footer(){
    return(
        <div className="flex flex-row justify-between text-[#91A0B6] text-[14px] max-lg:text-[16px] max-lg:flex-col max-lg:items-center max-lg:gap-[24px]">
            <div className="flex flex-row max-lg:flex-col max-lg:items-center max-lg:gap-[4px] lg:divide-x lg:divide-[#91A0B6]">
                <p className="px-4">Terms of Service</p>
                <p className="px-4">Privacy Policy</p>
                <p className="px-4">Subscription Policy</p>
            </div>
            <p className="text-center">©Copyright  © 2020 PlantIn. <br className="lg:hidden"/>All rights reserved</p>
        </div>
    )
}