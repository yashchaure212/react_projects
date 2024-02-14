import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar({ handleInputChange, query }) {
  return (
    <div className="flex  py-5 border-b-2 border-gray-200 justify-around items-center p-20px z-50 ml-2">
      <div className="nav-container ">
        <input
          onChange={handleInputChange}
          value={query}
          type="text"
          placeholder="Enter your search"
          className="Search-input p-2 border-none bg-[#f7f6f6] outline-none mr-4 rounded-md relative text-gray-500 w-[20rem]"
        />
      </div>
      <div className="profile-container gap-6 flex items-center justify-center text-2xl">
        <a href="#">
          <FiHeart />
        </a>

        <a href="#">
          <AiOutlineShopping />
        </a>
        <a href="#">
          <AiOutlineShoppingCart />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
