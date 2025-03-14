import { useState } from "react";
import { Link } from "react-scroll";
import { FaAlignRight, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.svg";
import search from "../public/search.svg";
import user from "../public/user.svg";
import SearchBar from "./SearchBar";
import union from '../public/Union.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: "Discover",
      id: "discover",
    },
    {
      name: "My Plants",
      id: "myplants",
    },
    {
      name: "Diseases",
      id: "diseases",
    },
    {
      name: "Blog",
      id: "blog",
    },
    {
      name: "FAQ",
      id: "faq",
    },
    {
      name: "Contact Us",
      id: "contacts",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10 max-h-[80px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:gap-x-6">
        <h1 className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            className="object-contain w-auto h-auto hidden md:block"
          />
          <Image
            src={union}
            alt="minilogo"
            className="object-contain w-auto h-auto block md:hidden"
          />
        </h1>

        <nav className={`lg:flex hidden space-x-6 md:space-x-2`}>
          {menuItems.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="cursor-pointer text-nowrap transition ease-in-out text-gray-600 hover:text-[#04BF94] block pt-[4px] px-4 md:max-xl:px-2"
            >
              {section.name}
            </Link>
          ))}
        </nav>

        <SearchBar/>

        <div className="lg:hidden w-[40px] h-[40px] flex items-center ">
          <button onClick={toggleMenu} className="text-gray-600  z-30">
            {isMenuOpen ? (
              <FaTimes size={28} className="text-[#C5D1DB] cursor-pointer" />
            ) : (
              <FaAlignRight size={28} className="text-[#C5D1DB] cursor-pointer" />
            )}
          </button>
        </div>

        <div className="flex justify-end align-center cursor-pointer max-lg:hidden">
          <Image
            src={user}
            alt="user"
            className="w-16"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-20">
          {menuItems.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-600 hover:text-[#04BF94] text-xl py-3"
              onClick={toggleMenu}
            >
              {section.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
