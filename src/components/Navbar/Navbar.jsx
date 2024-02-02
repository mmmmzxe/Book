import React from "react";
import Logo from "../../assets/Book.png";
import { IoMdSearch } from "react-icons/io";
import { FaBagShopping, FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";


const Menu = [

  {
    id: 1,
    name: "Top Rated",
    link: "/#services",
  },



];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Books",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
,
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}

      <div className=" py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <h1 className="text-pink-700">Books</h1>
            </a>
          
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-pink-700 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r  transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
             
              <FaHeart className="text-xl text-black drop-shadow-sm cursor-pointer hover:text-pink-700" />
            </button>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r  transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
             
              <FaUser className="text-xl text-black drop-shadow-sm cursor-pointer hover:text-pink-700" />
            </button>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r  transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
           
              <FaBagShopping className="text-xl text-black drop-shadow-sm cursor-pointer hover:text-pink-700" />
                <span className="text-black">$4.500</span>
            </button>

            {/* Darkmode Switch */}
         
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
        
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
            Home
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-pink-700 hover:text-white "
                    >
                      {data.name}
                    </a>
                  </li>
                  
                ))}
              </ul>
            </div>
          </li>
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-pink-700 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
             About
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-pink-700 hover:text-white"
                    >
                      {data.name}
                    </a>
                  </li>
                  
                ))}
              </ul>
            </div>
          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Books
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-pink-700 hover:text-white "
                    >
                      {data.name}
                    </a>
                  </li>
                  
                ))}
              </ul>
            </div>
          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
            Contect
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md ">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-pink-700 hover:text-white "
                    >
                      {data.name}
                    </a>
                  </li>
                  
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
