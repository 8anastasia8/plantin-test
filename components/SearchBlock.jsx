import Temperature from "./Temperature";
import Image from "next/image";
import search from "../public/search.svg";
import s_image from "../public/s_image.svg";

export default function SearchBlock({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative bg-[#04BF9429] opacity-[16] max-md:p-[16px] p-[56px] my-[48px] max-md:mb-[18px] rounded-[16px]">
      <span className="text-left">
        <h1 className="text-[#04BF94] font-[800] text-[30px] max-md:text-[24px]">
          Stay always tuned with planting trends
        </h1>
        <Temperature />
        <p className="hidden max-md:block text-[18px] pt-[8px] pb-[16px]">
          <span className="font-[700]">Tips & Tricks</span> selected specially
          for <span className="font-[700]">you!</span>
        </p>

        <div className="flex items-center w-[50%] max-md:w-[100%] bg-[#fff] p-[14px] text-[16px] rounded-[10px] focus:outline-none">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
          <Image src={search} alt="search" className="p-[2px]" />
        </div>
      </span>

      <span className="hidden md:flex absolute bottom-0 right-0 md:w-[30%] lg:w-[35%] pointer-events-none">
        <Image
          src={s_image}
          alt="Decorative Image"
          className="w-full h-auto object-contain"
        />
      </span>
    </div>
  );
}
