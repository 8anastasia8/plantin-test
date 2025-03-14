import { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import search from "../public/search.svg";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[70%] max-md:w-[100%] py-2 flex items-center justify-between relative mx-2">
      <div className="relative flex-grow flex justify-end">
        <div
          className={`flex items-center transition-all duration-300 rounded-[10px] py-2 ${
            isOpen
              ? "w-[100%] px-5 shadow-md border-gray-300 "
              : "w-10 border-transparent"
          }`}
        >
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none"
            >
              <Image src={search} alt="search" className="cursor-pointer" />
            </button>
          )}

          <input
            type="text"
            className={`flex-grow ml-2 focus:outline-none bg-transparent transition-all duration-300 ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
            placeholder="Search"
          />
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none ml-2 cursor-pointer"
            >
              <RxCross2 size={22} className="text-[#C5D1DB]" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
