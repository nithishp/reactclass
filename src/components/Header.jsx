import { Search, UserRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" h-[80px] w-full flex  items-center justify-between  bg-gray-700">
      <h1 className="font-semibold text-white text-[30px] ml-10">
        <Link to="/">Logo</Link>
      </h1>
      <div className="flex items-center gap-5">
        <Search color="white" />
        <input className="h-8 rounded-lg" />
      </div>
      <div className="flex text-white gap-6 mr-10">
        <h3>
          <Link to="/about">About</Link>
        </h3>
        <h3>Products</h3>
        <h3>Contact Us</h3>
        <Link to='/profile'>
        <div className="flex justify-center items-center gap-2">
          
            <UserRound />
            <h5>Profile</h5>
          
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
