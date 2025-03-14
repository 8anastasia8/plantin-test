import Image from "next/image";
import logo from "../public/logo.svg";
import p_image from '../public/p_image.svg'

export default function PromoSection() {
  return (
    <div className="relative opacity-[16] max-md:p-[16px] p-[24px] my-[48px] max-md:mb-[18px] rounded-[16px] bg-gradient-to-r from-[#CFEDE6] to-[#8CDECBD4]">
      <span className="text-left">
        <Image src={logo} className="mb-[24px]"></Image>
        <h1 className="text-[32px] text-[#04BF94] font-[700] mb-[8px]">Get unlimited access to exclusive articles</h1>
        <p className="text-[24px] font-[500]">Get rid of limits and read everything you wish</p>
        <button className="bg-[#04BF94] rounded-[8px] max-md:w-[100%] px-[32px] py-[8px] text-[#fff] text-[16px] font-[500] mt-[24px]">Try for free</button>
      </span>

      <span className="hidden md:flex absolute bottom-0 -right-4 md:max-lg:w-[25%] pointer-events-none">
        <Image
          src={p_image}
          alt="Decorative Image"
          className="w-full h-auto object-contain"
        />
      </span>
    </div>
  );
}
